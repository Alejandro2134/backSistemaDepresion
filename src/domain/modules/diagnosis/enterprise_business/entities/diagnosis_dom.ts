interface IDiagnosisDOM {
    id?: number;
    cedula: string;
    nombre: string;
    resultado: string;
}

export interface IDiagnosisFDOM {
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
}
