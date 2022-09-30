export interface IDiagnosisDAL {
    id?: number;
    cedula: string;
    nombre: string;
    resultado: string;
}

interface IOperators {
    [index: symbol]: any;
}
export interface IDiagnosisFDAL {
    id?: number;
    cedula?: string | IOperators;
    nombre?: string | IOperators;
}

export class DiagnosisDAL implements IDiagnosisDAL {
    id?: number;
    cedula: string;
    nombre: string;
    resultado: string;

    constructor(item: IDiagnosisDAL) {
        this.id = item.id;
        this.cedula = item.cedula;
        this.nombre = item.nombre;
        this.resultado = item.resultado;
    }
}
