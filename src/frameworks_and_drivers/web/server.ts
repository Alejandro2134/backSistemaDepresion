import express, { json } from 'express';
import morgan from '@fnd/external_interfaces/morgan';
import cors from 'cors';
import {
    swaggerDocument,
    swaggerUi,
} from '@fnd/external_interfaces/swagger_ui';
import { OpenApiValidator, apiSpec } from '@fnd/external_interfaces/open_api';
import logger from '../external_interfaces/logger';
import errorHandler from '../../frameworks_and_drivers/web/middlewares/error/error_handler';
import { requestLogging } from '@fnd/web/middlewares/logging/request_logging';
import { routes as appRoutes } from './routes/index';
import checkToken from './middlewares/auth/check_token';

/**Init logger */
const Logger = logger(__filename);

const HTTP_PORT = process.env.PORT || 3000;
const OPENAPI_SPEC = process.env.OPENAPI_SPEC || '/spec';
const OPENAPI_DOCS = process.env.OPENAPI_DOCS || '/docs';

export class Server {
    app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    config() {
        //SETTINGS
        this.app.set('port', HTTP_PORT);
        //MIDDLEWARES
        /**Morgan to see logs in dev */
        this.app.use(
            morgan().unless({
                path: ['/', '/readiness', '/healthy'],
            })
        );
        /**To process json request */
        this.app.use(json());
        /**To give cors permissions */
        this.app.use(cors());
        this.app.options('*', cors);
        /**Swagger UI */
        this.app.use(
            OPENAPI_DOCS,
            swaggerUi.serve,
            swaggerUi.setup(swaggerDocument)
        );
        /**Check Token and add User property on request */
        this.app.use(
            checkToken().unless({
                path: [
                    '/',
                    '/readiness',
                    '/healthy',
                    '/v1/users/login',
                    /^\/v1\/users\/.*\/update-one/,
                    OPENAPI_SPEC,
                    OPENAPI_DOCS,
                ]
            })
        )
    }

    routes() {
        /**Middleare to log request bodies and queries */
        this.app.use(requestLogging());
        /**App routes */
        this.app.use(appRoutes);
    }

    configOpenAPi() {
        /**Add route to dowloand OAS file */
        this.app.use(OPENAPI_SPEC, express.static(apiSpec || ''));
        /**Install Validator in Express App */
        this.app.use(OpenApiValidator);
    }

    initErrorHandler() {
        /**Error Handler */
        this.app.use(errorHandler);
    }

    start() {
        try {
            this.configOpenAPi();
            this.routes();
            this.initErrorHandler();
            this.app.listen(this.app.get('port'), () => {
                Logger.warn(
                    `🆗 Express Application Running on port ${this.app.get(
                        'port'
                    )}`
                );
            });
        } catch (error: unknown) {
            if (error instanceof Error)
                Logger.error(`ERROR : ${error.message} STACK : ${error.stack}`);
        }
    }
}
