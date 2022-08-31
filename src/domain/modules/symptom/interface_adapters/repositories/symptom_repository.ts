import { IOperations, IOptions } from "@fnd/storage/sql/client/interfaces/ioperations";
import { ISymptomFDOM, SymptomDOM } from "@symptoms/enterprise_business/entities/symptom/symptom_dom";

export class SymptomsRepository implements IOperations<SymptomDOM, ISymptomFDOM> {
    private implementation: IOperations<SymptomDOM, ISymptomFDOM>;

    constructor(implementation: IOperations<SymptomDOM, ISymptomFDOM>) {
        this.implementation = implementation;
    }

    async create(item: SymptomDOM): Promise<SymptomDOM> {
        return await this.implementation.create(item);
    }
    async update(id: number, item: SymptomDOM): Promise<SymptomDOM | null> {
        return await this.implementation.update(id, item);
    }
    async delete(id: number): Promise<number> {
        return await this.implementation.delete(id);
    }
    async getAll(filter: ISymptomFDOM, options?: IOptions): Promise<SymptomDOM[]> {
        return await this.implementation.getAll(filter, options);
    }
    async getOne(id: number): Promise<SymptomDOM | null> {
        return await this.implementation.getOne(id);
    }
    async countRegisters(filter: ISymptomFDOM): Promise<number> {
        return await this.implementation.countRegisters(filter);
    }
}