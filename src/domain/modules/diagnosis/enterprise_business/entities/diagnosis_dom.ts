export interface IDiagnosisDOM {
    id?: number;
    cedula: string;
    nombre: string;
    resultado: string;
    observaciones: string;
    fechaCreacion?: string;
}

export interface IDiagnosisFDOM {
    id?: number;
    cedula?: string;
    nombre?: string;
}

export class DiagnosisDOM implements IDiagnosisDOM {
    id?: number;
    cedula: string;
    nombre: string;
    resultado: string;
    observaciones: string;
    fechaCreacion?: string;

    constructor(item: IDiagnosisDOM) {
        this.id = item.id;
        this.cedula = item.cedula;
        this.nombre = item.nombre;
        this.resultado = item.resultado;
        this.observaciones = item.observaciones;
        this.fechaCreacion = item.fechaCreacion;
    }

    updateDiagnosis(item: IDiagnosisDOM) {
        this.cedula = item?.cedula;
        this.nombre = item?.nombre;
        this.observaciones = item?.observaciones;
        return Object.freeze(this);
    }
}
