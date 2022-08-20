export interface IQuestionAPI {
    id: number;
    pregunta: string;
    sintomas?: number[];
}

export class QuestionAPI implements IQuestionAPI {
    id: number;
    pregunta: string;
    sintomas?: number[];

    constructor(item: IQuestionAPI) {
        this.id = item.id;
        this.pregunta = item.pregunta;
        this.sintomas = item.sintomas;
    }
}