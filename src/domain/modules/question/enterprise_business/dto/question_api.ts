import { ISymptomAPI } from "domain/modules/symptom/enterprise_business/dto/symptom_api";

export interface IQuestionAPI {
    id: number;
    pregunta: string;
    sintomas?: number[];
    /**Not logic params */
    symptoms?: ISymptomAPI[]; 
}

export class QuestionAPI implements IQuestionAPI {
    id: number;
    pregunta: string;
    sintomas?: number[];
    /**Not logic params */
    symptoms!: ISymptomAPI[];

    constructor(item: IQuestionAPI) {
        this.id = item.id;
        this.pregunta = item.pregunta;
        this.sintomas = item.sintomas;
    }
}