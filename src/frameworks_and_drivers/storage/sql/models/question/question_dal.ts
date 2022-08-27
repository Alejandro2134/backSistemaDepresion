import { ISymptomDAL } from "../symptom/symptom_dal";

export interface IQuestionDAL {
    id?: number;
    pregunta: string;
    /**Not logic params */
    symptoms?: ISymptomDAL[];
}

interface IOperators {
    [index: symbol]: any;
}

export interface IQuestionFDAL {
    pregunta?: string | IOperators;
    id?: number;
}

export class QuestionDAL implements IQuestionDAL {
    id?: number;
    pregunta: string;
    /**Not logic params */
    symptoms?: ISymptomDAL[];

    constructor(item: IQuestionDAL) {
        this.id = item.id;
        this.pregunta = item.pregunta;
        this.symptoms = item.symptoms;
    }
}