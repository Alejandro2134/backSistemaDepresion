export interface IUserAPI {
    cedula: string;
    nombre: string;
    email: string;
    contraseña: string | null;
    es_admin: boolean;
}

export class UserAPI implements IUserAPI {
    cedula: string;
    nombre: string;
    email: string;
    contraseña: string | null;
    es_admin: boolean;

    constructor(item: IUserAPI) {
        this.cedula = item.cedula;
        this.nombre = item.nombre;
        this.email = item.email;
        this.contraseña = item.contraseña;
        this.es_admin = item.es_admin;
    }
}
