import {
    IOperations,
    IOptions,
} from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    UserDOM,
    IUserFDOM,
} from '@users/enterprise_bussines/entities/user/user_dom';

export class UsersRepository implements IOperations<UserDOM, IUserFDOM> {
    private implementation: IOperations<UserDOM, IUserFDOM>;

    constructor(item: IOperations<UserDOM, UserDOM>) {
        this.implementation = item;
    }

    async create(item: UserDOM): Promise<UserDOM> {
        return await this.implementation.create(item);
    }
    async update(email: string, item: UserDOM): Promise<UserDOM | null> {
        return await this.implementation.update(email, item);
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
