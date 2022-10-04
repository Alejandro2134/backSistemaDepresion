import { IDepresionTypeDOM } from '@depresion_type/enterprise_business/entities/depresion_type/depresion_type_dom';

export interface ISymptomDOM {
    id?: number;
    sintoma: string;
    tiposDepresion: number[];
    removerTiposDepresion?: number[];
    /**Not logic params */
    depresionTypes?: IDepresionTypeDOM[];
}

export interface ISymptomFDOM {
    id?: number;
    sintoma?: string;
    tiposDepresion?: number[];
}

export class SymptomDOM implements ISymptomDOM {
    id?: number;
    sintoma: string;
    tiposDepresion: number[];
    removerTiposDepresion?: number[];
    /**Not logic params */
    depresionTypes?: IDepresionTypeDOM[];

    constructor(item: ISymptomDOM) {
        this.id = item.id;
        this.sintoma = item.sintoma;
        this.tiposDepresion = item.tiposDepresion;
        this.removerTiposDepresion = item.removerTiposDepresion;
    }

    updateSymptom(item: ISymptomDOM) {
        this.removerTiposDepresion = item?.removerTiposDepresion;
        this.sintoma = item?.sintoma;
        this.tiposDepresion = addTiposDepresion(
            this.tiposDepresion,
            item.tiposDepresion,
            item.removerTiposDepresion
        );
        return Object.freeze(this);
    }
}

const addTiposDepresion = (
    actualTiposDepresion: number[],
    newTiposDepresion: number[],
    removeTiposDepresion: number[] | undefined
): number[] => {
    let finalTiposDepresion: number[] = [];

    if (removeTiposDepresion) {
        for (const tiposDepresion of actualTiposDepresion) {
            if (!removeTiposDepresion.includes(tiposDepresion)) {
                finalTiposDepresion.push(tiposDepresion);
            }
        }
    } else {
        finalTiposDepresion = finalTiposDepresion.concat(actualTiposDepresion);
    }

    if (newTiposDepresion) {
        return finalTiposDepresion.concat(newTiposDepresion);
    } else {
        return finalTiposDepresion;
    }
};
