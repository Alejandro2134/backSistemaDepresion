export interface IUserDAL {
    id?: number;
    nombre: string;
    email: string;
    contraseña: string;
    es_admin: boolean;
}

export interface IUserFDAL {
    es_admin?: boolean;
}

export class UserDAL implements IUserDAL {
    id?: number;
    nombre: string;
    email: string;
    contraseña: string;
    es_admin: boolean;

    constructor(item: IUserDAL) {
        this.nombre = item.nombre;
        this.email = item.email;
        this.contraseña = item.contraseña;
        this.es_admin = item.es_admin;
    }
}
