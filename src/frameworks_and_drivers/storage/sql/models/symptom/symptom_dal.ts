export interface ISymptomDAL {
    id?: number;
    sintoma: string;
}

export class SymptomDAL implements ISymptomDAL {
    id?: number;
    sintoma: string;

    constructor(item: ISymptomDAL) {
        this.sintoma = item.sintoma;
    }
}