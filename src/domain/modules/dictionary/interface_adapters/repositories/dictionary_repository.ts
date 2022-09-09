import {
    IOperations,
    IOptions,
} from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    IDictionaryFDOM,
    DictionaryDOM,
} from '../../enterprise_business/entities/dictionary_dom';

export class DictionarysRepository
    implements IOperations<DictionaryDOM, IDictionaryFDOM>
{
    private implementation: IOperations<DictionaryDOM, IDictionaryFDOM>;

    constructor(implementation: IOperations<DictionaryDOM, IDictionaryFDOM>) {
        this.implementation = implementation;
    }

    async create(item: DictionaryDOM): Promise<DictionaryDOM> {
        return await this.implementation.create(item);
    }
    async update(
        id: number,
        item: DictionaryDOM
    ): Promise<DictionaryDOM | null> {
        return await this.implementation.update(id, item);
    }
    async delete(id: number): Promise<number> {
        return await this.implementation.delete(id);
    }
    async getAll(
        filter: IDictionaryFDOM,
        options?: IOptions
    ): Promise<DictionaryDOM[]> {
        return await this.implementation.getAll(filter, options);
    }
    async getOne(id: number): Promise<DictionaryDOM | null> {
        return await this.implementation.getOne(id);
    }
    async countRegisters(filter: IDictionaryFDOM): Promise<number> {
        return await this.implementation.countRegisters(filter);
    }
}
