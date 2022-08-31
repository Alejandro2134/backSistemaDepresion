export interface ISymptomAPI {
    id?: number;
    sintoma: string;
}

export class SymptomAPI implements ISymptomAPI {
    id?: number;
    sintoma: string;

    constructor(item: ISymptomAPI) {
        this.id = item.id;
        this.sintoma = item.sintoma;
    }
}