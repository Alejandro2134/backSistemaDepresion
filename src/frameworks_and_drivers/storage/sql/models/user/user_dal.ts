export interface IUserDAL {
    id?: number;
    cedula: string;
    nombre: string;
    email: string;
    contraseña: string | null;
    es_admin: boolean;
}

interface IOperators {
    [index: symbol]: any;
}

export interface IUserFDAL {
    email_login?: string;
    email?: string | IOperators;
    es_admin?: boolean;
}

export class UserDAL implements IUserDAL {
    id?: number;
    cedula: string;
    nombre: string;
    email: string;
    contraseña: string | null;
    es_admin: boolean;

    constructor(item: IUserDAL) {
        this.cedula = item.cedula;
        this.nombre = item.nombre;
        this.email = item.email;
        this.contraseña = item.contraseña;
        this.es_admin = item.es_admin;
    }
}
