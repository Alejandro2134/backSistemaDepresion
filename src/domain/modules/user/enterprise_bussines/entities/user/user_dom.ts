export interface IUserDOM {
    nombre: string;
    email: string;
    contraseña: string;
    esAdmin: boolean;
}

export interface IUserFDOM {
    esAdmin?: boolean;
}

export class UserDOM implements IUserDOM {
    nombre: string;
    email: string;
    contraseña: string;
    esAdmin: boolean;

    constructor(item: IUserDOM) {
        this.nombre = item.nombre;
        this.email = item.email;
        this.contraseña = item.contraseña;
        this.esAdmin = item.esAdmin;
    }

    updateUser(item: IUserDOM) {
        this.nombre = item?.nombre;
        this.email = item?.email;
        this.contraseña = item?.contraseña;
        this.esAdmin = item?.esAdmin;
        return Object.freeze(this);
    }
}
