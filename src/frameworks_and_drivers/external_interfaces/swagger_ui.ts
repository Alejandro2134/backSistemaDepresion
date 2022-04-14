/**YAML library */
import YAML from 'yamljs';
/**Swagger UI for express */
import swaggerUi from 'swagger-ui-express';
/**Load YAML files */
const swaggerDocument = YAML.load('./scheme.yaml');

export { swaggerUi, swaggerDocument };
