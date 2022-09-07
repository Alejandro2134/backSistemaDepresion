export interface ISymptomDAL {
    id?: number;
    sintoma: string;
}

interface IOperators {
    [index: symbol]: any;
}

export interface ISymptomFDAL {
    sintoma?: string | IOperators;
}

export class SymptomDAL implements ISymptomDAL {
    id?: number;
    sintoma: string;

    constructor(item: ISymptomDAL) {
        this.id = item.id;
        this.sintoma = item.sintoma;
    }
}
