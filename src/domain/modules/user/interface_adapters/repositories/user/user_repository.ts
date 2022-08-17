import {
    IAditionalOperations,
    IOperations,
    IOptions,
} from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    UserDOM,
    IUserFDOM,
} from '@users/enterprise_bussines/entities/user/user_dom';

interface Implementation extends IOperations<UserDOM, IUserFDOM>, IAditionalOperations<UserDOM> {}

export class UsersRepository implements Implementation {
    private implementation: Implementation;

    constructor(item: Implementation) {
        this.implementation = item;
    }

    async updateByEmail(email: string, item: UserDOM): Promise<UserDOM | null> {
        return await this.implementation.updateByEmail(email, item);
    }

    async create(item: UserDOM): Promise<UserDOM> {
        return await this.implementation.create(item);
    }
    async update(id: number, item: UserDOM): Promise<UserDOM | null> {
        return await this.implementation.update(id, item);
    }
    async delete(id: number): Promise<number> {
        return await this.implementation.delete(id);
    }
    async getAll(filter: IUserFDOM, options?: IOptions): Promise<UserDOM[]> {
        return await this.implementation.getAll(filter, options);
    }
    async getOne(id: number): Promise<UserDOM | null> {
        return await this.implementation.getOne(id);
    }
    async countRegisters(filter: IUserFDOM): Promise<number> {
        return await this.implementation.countRegisters(filter);
    }
}
