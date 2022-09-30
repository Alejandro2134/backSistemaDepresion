interface IDiagnosisAPI {
    id?: number;
    cedula: string;
    nombre: string;
    resultado: string;
}

export class DiagnosisAPI implements IDiagnosisAPI {
    id?: number;
    cedula: string;
    nombre: string;
    resultado: string;

    constructor(item: IDiagnosisAPI) {
        this.id = item.id;
        this.cedula = item.cedula;
        this.nombre = item.nombre;
        this.resultado = item.resultado;
    }
}
