export interface IQuestionDOM {
    id: number;
    pregunta: string;
    sintomas?: number[];
}

export interface IQuestionFDOM {
    pregunta?: string;
}

export class QuestionDOM implements IQuestionDOM {
    id: number;
    pregunta: string;
    sintomas?: number[];

    constructor(item: IQuestionDOM) {
        this.id = item.id;
        this.pregunta = item.pregunta;
        this.sintomas = item.sintomas;
    }
}