export interface IDiagnosisDOM {
    id?: number;
    cedula: string;
    nombre: string;
    resultado: string;
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

    constructor(item: IDiagnosisDOM) {
        this.id = item.id;
        this.cedula = item.cedula;
        this.nombre = item.nombre;
        this.resultado = item.resultado;
    }

    updateDiagnosis(item: IDiagnosisDOM) {
        this.cedula = item?.cedula;
        this.nombre = item?.nombre;
        return Object.freeze(this);
    }
}
