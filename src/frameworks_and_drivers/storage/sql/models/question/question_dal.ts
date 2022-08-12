export interface IQuestionDAL {
    id?: number;
    pregunta: string;
}

export class QuestionDAL implements IQuestionDAL {
    id?: number;
    pregunta: string;

    constructor(item: IQuestionDAL) {
        this.pregunta = item.pregunta;
    }
}