import { IMapperAPI } from '@common/interface_adapters/web/controllers/bases/imapperapi';
import { UserAPI } from '@users/enterprise_bussines/dto/user_api';
import {
    IUserDOM,
    UserDOM,
} from '@users/enterprise_bussines/entities/user/user_dom';

export class UserMapper implements IMapperAPI<UserDOM, UserAPI> {
    fromApiToDom(item: UserAPI, opts?: any): UserDOM {
        const dom = new UserDOM({
            contraseña: item.contraseña,
            email: item.email,
            esAdmin: item.es_admin,
            nombre: item.nombre,
        });

        return dom;
    }

    fromDomToApi(item: IUserDOM, opts?: any): UserAPI {
        const api = new UserAPI({
            contraseña: item.contraseña,
            email: item.email,
            es_admin: item.esAdmin,
            nombre: item.nombre,
        });

        return api;
    }
}

const mapper = new UserMapper();

export default mapper;
