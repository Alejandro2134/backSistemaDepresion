import { IOperations, IOptions } from "@fnd/storage/sql/client/interfaces/ioperations";
import { IQuestionFDOM, QuestionDOM } from "../../enterprise_business/entities/question/question_dom";

export class QuestionsRepository implements IOperations<QuestionDOM, IQuestionFDOM> {
    private implementation: IOperations<QuestionDOM, IQuestionFDOM>;

    constructor(implementation: IOperations<QuestionDOM, IQuestionFDOM>) {
        this.implementation = implementation;
    }

    async create(item: QuestionDOM): Promise<QuestionDOM> {
        return await this.implementation.create(item);
    }
    async update(id: number, item: QuestionDOM): Promise<QuestionDOM | null> {
        return await this.implementation.update(id, item);
    }
    async delete(id: number): Promise<number> {
        return await this.implementation.delete(id);
    }
    async getAll(filter: IQuestionFDOM, options?: IOptions): Promise<QuestionDOM[]> {
        return await this.implementation.getAll(filter, options);
    }
    async getOne(id: number): Promise<QuestionDOM | null> {
        return await this.implementation.getOne(id);
    }
    async countRegisters(filter: IQuestionFDOM): Promise<number> {
        return await this.implementation.countRegisters(filter);
    }
}