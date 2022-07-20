export interface IUserDAL {
    id?: number;
    cedula: string;
    nombre: string;
    email: string;
    contraseña: string;
    es_admin: boolean;
}

export interface IUserFDAL {
    email?: string;
    es_admin?: boolean;
}

export class UserDAL implements IUserDAL {
    id?: number;
    cedula: string;
    nombre: string;
    email: string;
    contraseña: string;
    es_admin: boolean;

    constructor(item: IUserDAL) {
        this.cedula = item.cedula;
        this.nombre = item.nombre;
        this.email = item.email;
        this.contraseña = item.contraseña;
        this.es_admin = item.es_admin;
    }
}
