import {
    IOperations,
    IOptions,
} from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    IDepresionTypeFDOM,
    DepresionTypeDOM,
} from '../../enterprise_business/entities/depresion_type/depresion_type_dom';

export class DepresionTypesRepository
    implements IOperations<DepresionTypeDOM, IDepresionTypeFDOM>
{
    private implementation: IOperations<DepresionTypeDOM, IDepresionTypeFDOM>;

    constructor(
        implementation: IOperations<DepresionTypeDOM, IDepresionTypeFDOM>
    ) {
        this.implementation = implementation;
    }

    async create(item: DepresionTypeDOM): Promise<DepresionTypeDOM> {
        return await this.implementation.create(item);
    }
    async update(
        id: number,
        item: DepresionTypeDOM
    ): Promise<DepresionTypeDOM | null> {
        return await this.implementation.update(id, item);
    }
    async delete(id: number): Promise<number> {
        return await this.implementation.delete(id);
    }
    async getAll(
        filter: IDepresionTypeFDOM,
        options?: IOptions
    ): Promise<DepresionTypeDOM[]> {
        return await this.implementation.getAll(filter, options);
    }
    async getOne(id: number): Promise<DepresionTypeDOM | null> {
        return await this.implementation.getOne(id);
    }
    async countRegisters(filter: IDepresionTypeFDOM): Promise<number> {
        return await this.implementation.countRegisters(filter);
    }
}
