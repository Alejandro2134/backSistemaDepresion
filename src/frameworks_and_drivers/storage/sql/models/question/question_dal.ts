import { ISymptomDAL } from '../symptom/symptom_dal';

export interface IQuestionDAL {
    id?: number;
    pregunta: string;
    sintomas: number[];
    tipos_depresion_sintomas?: number[];
    /**Not logic params */
    symptoms?: ISymptomDAL[];
}

interface IOperators {
    [index: symbol]: any;
}

export interface IQuestionFDAL {
    [index: string]: any;
    pregunta?: string | IOperators;
    id?: number | IOperators;
}

export class QuestionDAL implements IQuestionDAL {
    id?: number;
    pregunta: string;
    sintomas: number[];
    tipos_depresion_sintomas?: number[];
    /**Not logic params */
    symptoms?: ISymptomDAL[];

    constructor(item: IQuestionDAL) {
        this.id = item.id;
        this.pregunta = item.pregunta;
        this.sintomas = item.sintomas;
        this.tipos_depresion_sintomas = item.tipos_depresion_sintomas;
    }
}
