export interface IUserDOM {
    cedula: string;
    nombre: string;
    email: string;
    contraseña: string;
    esAdmin: boolean;
}

export interface IAuthDOM {
    email: string;
    contraseña: string;
}

export interface IUserFDOM {
    email?: string;
    esAdmin?: boolean;
}

export class UserDOM implements IUserDOM {
    cedula: string;
    nombre: string;
    email: string;
    contraseña: string;
    esAdmin: boolean;

    constructor(item: IUserDOM) {
        this.cedula = item.cedula;
        this.nombre = item.nombre;
        this.email = item.email;
        this.contraseña = item.contraseña;
        this.esAdmin = item.esAdmin;
    }

    updateUser(item: IUserDOM) {
        this.cedula = item?.cedula;
        this.nombre = item?.nombre;
        this.email = item?.email;
        this.contraseña = item?.contraseña;
        this.esAdmin = item?.esAdmin;
        return Object.freeze(this);
    }
}
