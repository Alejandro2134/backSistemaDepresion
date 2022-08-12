import {
    IUserFDOM,
    UserDOM,
} from '@users/enterprise_bussines/entities/user/user_dom';
import { IUserFDAL, UserDAL } from '@fnd/storage/sql/models/user/user_dal';
import { IFilterWrapper, IWrapper } from '../../client/interfaces/iwrapper';
import { User } from '@fnd/storage/sql/models/user/User';
import { StorageError } from '@common/enterprise_business_rules/dto/errors/storage_error';
import { BaseImplementation } from '../../client/driver/base_sql_impl';
import { camelToSnake } from '@fnd/helpers/from_camel_to_snake';
import { Op } from 'sequelize';

export class UsersSQLImplementation extends BaseImplementation<UserDOM, IUserFDOM>
    implements IWrapper<UserDOM, UserDAL>, IFilterWrapper<IUserFDOM, IUserFDAL>
{
    async create(item: UserDOM): Promise<UserDOM> {
        try {
            const itemDAL = this.fromDomToDal(item);
            const resDAL = await User.create(itemDAL);
            const resDOM = this.fromDalToDom(resDAL);
            return resDOM;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async update(email: string, item: UserDOM): Promise<UserDOM | null> {
        try {
            const response = await User.update(this.fromDomToDal(item), {
                where: {
                    email: email,
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

    async getAll(filter: IUserFDOM): Promise<UserDOM[]> {
        try {
            const resDAL = await User.findAll({
                where: this.filterDomToDal(filter)   
            });
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
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async countRegisters(filter: IUserFDOM): Promise<number> {
        try {
            return await User.count({
                where: this.filterDomToDal(filter)
            });
        } catch (error) {
            throw new StorageError(error);
        }
    }

    fromDomToDal(item: UserDOM): UserDAL {
        const entity = new UserDAL({
            id: item.id,
            cedula: item.cedula,
            contraseña: item.contraseña,
            email: item.email,
            es_admin: item.esAdmin,
            nombre: item.nombre,
        });

        return entity;
    }

    fromDalToDom(item: User): UserDOM {
        const entity = new UserDOM({
            id: item.id,
            cedula: item.cedula,
            contraseña: item.contraseña,
            email: item.email,
            esAdmin: item.es_admin,
            nombre: item.nombre,
        });

        return entity;
    }

    filterDomToDal(item: IUserFDOM): IUserFDAL {
        const mapFilter: IUserFDAL = {

        }

        for(const key in item) {
            switch(key) {
                case 'email':
                    mapFilter[key] = {
                        [Op.iLike]: `${item[key]}%`
                    }
                    break;
                case 'esAdmin':
                    mapFilter[camelToSnake(key)] = item[key];
                    break;
            }
        }

        return mapFilter;
    }
}
