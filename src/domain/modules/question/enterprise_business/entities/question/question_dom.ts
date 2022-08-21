import { ISymptomDOM } from "domain/modules/symptom/enterprise_business/entities/symptom_dom";

export interface IQuestionDOM {
    id: number;
    pregunta: string;
    sintomas?: number[];
    /**Not logic params */
    symptoms?: ISymptomDOM[]; 
}

export interface IQuestionFDOM {
    id?: number;
    pregunta?: string;
}

export class QuestionDOM implements IQuestionDOM {
    id: number;
    pregunta: string;
    sintomas?: number[];
    /**Not logic params */
    symptoms!: ISymptomDOM[]; 

    constructor(item: IQuestionDOM) {
        this.id = item.id;
        this.pregunta = item.pregunta;
        this.sintomas = item.sintomas;
    }
}