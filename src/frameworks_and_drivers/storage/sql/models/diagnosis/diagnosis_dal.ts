export interface IDiagnosisDAL {
    id?: number;
    cedula: string;
    nombre: string;
    resultado: string;
}

export class DiagnosisDAL implements IDiagnosisDAL {
    id?: number;
    cedula: string;
    nombre: string;
    resultado: string;

    constructor(item: IDiagnosisDAL) {
        this.cedula = item.cedula;
        this.nombre = item.nombre;
        this.resultado = item.resultado;
    }
}