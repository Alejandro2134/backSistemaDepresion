import { ISymptomDOM } from '@symptoms/enterprise_business/entities/symptom/symptom_dom';

export interface IQuestionDOM {
    id?: number;
    pregunta: string;
    sintomas: number[];
    removerSintomas?: number[];
    tiposDepresionSintomas?: number[];
    /**Not logic params */
    symptoms?: ISymptomDOM[];
}

export interface IQuestionFDOM {
    sintomas?: number[];
    id?: number;
    pregunta?: string;
    preguntasRespondidas?: number[];
    tiposDepresionSintomas?: number[];
}

export class QuestionDOM implements IQuestionDOM {
    id?: number;
    pregunta: string;
    sintomas: number[];
    removerSintomas?: number[];
    tiposDepresionSintomas?: number[];
    /**Not logic params */
    symptoms?: ISymptomDOM[];

    constructor(item: IQuestionDOM) {
        this.id = item.id;
        this.pregunta = item.pregunta;
        this.sintomas = item.sintomas;
        this.removerSintomas = item.removerSintomas;
        this.tiposDepresionSintomas = item.tiposDepresionSintomas;
    }

    updateQuestion(item: IQuestionDOM) {
        this.removerSintomas = item?.removerSintomas;
        this.sintomas = addSintomas(
            this.sintomas,
            item.sintomas,
            item.removerSintomas
        );
        this.pregunta = item?.pregunta;
        return Object.freeze(this);
    }
}

const addSintomas = (
    actualSintomas: number[],
    newSintomas: number[],
    removeSintomas: number[] | undefined
): number[] => {
    let finalSintomas: number[] = [];

    if (removeSintomas) {
        for (const sintoma of actualSintomas) {
            if (!removeSintomas.includes(sintoma)) {
                finalSintomas.push(sintoma);
            }
        }
    } else {
        finalSintomas = finalSintomas.concat(actualSintomas);
    }

    if (newSintomas) {
        return finalSintomas.concat(newSintomas);
    } else {
        return finalSintomas;
    }
};
