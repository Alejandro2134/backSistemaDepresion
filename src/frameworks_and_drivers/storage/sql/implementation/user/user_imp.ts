import {
    IUserFDOM,
    UserDOM,
} from '@users/enterprise_bussines/entities/user/user_dom';
import { UserDAL } from '@fnd/storage/sql/models/user/user_dal';
import { IWrapper } from '../../client/interfaces/iwrapper';
import { User } from '@fnd/storage/sql/models/user/User';
import { StorageError } from '@common/enterprise_business_rules/dto/errors/storage_error';
import { IOperations } from '../../client/interfaces/ioperations';

export class UsersSQLImplementation
    implements IWrapper<UserDOM, UserDAL>, IOperations<UserDOM, IUserFDOM>
{
    async create(item: UserDOM): Promise<UserDOM> {
        try {
            const itemDAL = this.fromDomToDal(item);
            const resDAL = await User.create(itemDAL);
            const resDOM = this.fromDalToDom(resDAL);
            return resDOM;
        } catch (error: any) {
            throw new StorageError(error.message);
        }
    }

    async update(id: number, item: UserDOM): Promise<UserDOM | null> {
        try {
            const response = await User.update(this.fromDomToDal(item), {
                where: {
                    id: id,
                },
                returning: true,
            });

            const resDAL = response[1];

            const resDOM =
                resDAL !== null ? this.fromDalToDom(resDAL[0]) : null;
            return resDOM;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async delete(id: number): Promise<number> {
        try {
            const res = await User.destroy({
                where: {
                    id: id,
                },
            });

            return res;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async getAll(): Promise<UserDOM[]> {
        try {
            const resDAL = await User.findAll();
            const resDOM = resDAL.map(this.fromDalToDom);
            return resDOM;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async getOne(id: number): Promise<UserDOM | null> {
        try {
            const resDAL = await User.findByPk(id);
            return resDAL ? this.fromDalToDom(resDAL) : null;
        } catch (error: any) {
            throw new StorageError(error.message);
        }
    }

    async countRegisters(): Promise<number> {
        try {
            return await User.count();
        } catch (error) {
            throw new StorageError(error);
        }
    }

    fromDomToDal(item: UserDOM): UserDAL {
        const entity = new UserDAL({
            contraseña: item.contraseña,
            email: item.email,
            es_admin: item.esAdmin,
            nombre: item.nombre,
        });

        return entity;
    }

    fromDalToDom(item: User): UserDOM {
        const entity = new UserDOM({
            contraseña: item.contraseña,
            email: item.email,
            esAdmin: item.es_admin,
            nombre: item.nombre,
        });

        return entity;
    }
}
