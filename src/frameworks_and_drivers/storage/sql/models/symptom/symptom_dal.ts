export interface ISymptomDAL {
    id?: number;
    sintoma: string;
    question_id?: number | null;
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
    question_id?: number | null;

    constructor(item: ISymptomDAL) {
        this.id = item.id;
        this.sintoma = item.sintoma;
    }
}
