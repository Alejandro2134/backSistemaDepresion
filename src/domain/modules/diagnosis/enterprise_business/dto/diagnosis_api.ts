interface IDiagnosisAPI {
    id?: number;
    cedula: string;
    nombre: string;
    resultado: string;
    observaciones: string;
    fecha_creacion?: string;
}

export class DiagnosisAPI implements IDiagnosisAPI {
    id?: number;
    cedula: string;
    nombre: string;
    resultado: string;
    observaciones: string;
    fecha_creacion?: string;

    constructor(item: IDiagnosisAPI) {
        this.id = item.id;
        this.cedula = item.cedula;
        this.nombre = item.nombre;
        this.resultado = item.resultado;
        this.observaciones = item.observaciones;
        this.fecha_creacion = item.fecha_creacion;
    }
}
