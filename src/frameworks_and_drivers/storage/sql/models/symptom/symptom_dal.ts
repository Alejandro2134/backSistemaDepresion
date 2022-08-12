export interface ISymptomDAL {
    id?: number;
    sintoma: string;
    pregunta_id: number;
}

export class SymptomDAL implements ISymptomDAL {
    id?: number;
    sintoma: string;
    pregunta_id: number;

    constructor(item: ISymptomDAL) {
        this.sintoma = item.sintoma;
        this.pregunta_id = item.pregunta_id;
    }
}