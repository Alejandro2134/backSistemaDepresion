export interface IQuestionDAL {
    id?: number;
    pregunta: string;
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

    constructor(item: IQuestionDAL) {
        this.pregunta = item.pregunta;
    }
}