export interface ISymptomDOM {
    id?: number;
    sintoma: string;
}

export interface ISymptomFDOM {
    id?: number;
    sintoma?: string;
}

export class SymptomDOM implements ISymptomDOM {
    id?: number;
    sintoma: string;

    constructor(item: ISymptomDOM) {
        this.id = item.id;
        this.sintoma = item.sintoma;
    }

    updateSymptom(item: ISymptomDOM) {
        this.sintoma = item?.sintoma;
        return Object.freeze(this);
    }
}