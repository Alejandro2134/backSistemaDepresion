export interface IUserAPI {
    nombre: string;
    email: string;
    contraseña: string;
    es_admin: boolean;
}

export class UserAPI implements IUserAPI {
    nombre: string;
    email: string;
    contraseña: string;
    es_admin: boolean;

    constructor(item: IUserAPI) {
        this.nombre = item.nombre;
        this.email = item.email;
        this.contraseña = item.contraseña;
        this.es_admin = item.es_admin;
    }
}