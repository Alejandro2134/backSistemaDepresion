import {
    IDictionaryFDOM,
    DictionaryDOM,
} from '@dictionary/enterprise_business/entities/dictionary_dom';
import {
    IDictionaryFDAL,
    DictionaryDAL,
} from '@fnd/storage/sql/models/dictionary/dictionary_dal';
import { IFilterWrapper, IWrapper } from '../../client/interfaces/iwrapper';
import { Dictionary } from '@fnd/storage/sql/models/dictionary/Dictionary';
import { StorageError } from '@common/enterprise_business_rules/dto/errors/storage_error';
import { BaseImplementation } from '../../client/driver/base_sql_impl';
import { camelToSnake } from '@fnd/helpers/from_camel_to_snake';
import { Op } from 'sequelize';

export class DictionarysSQLImplementation
    extends BaseImplementation<DictionaryDOM, IDictionaryFDOM>
    implements
        IWrapper<DictionaryDOM, DictionaryDAL>,
        IFilterWrapper<IDictionaryFDOM, IDictionaryFDAL>
{
    async create(item: DictionaryDOM): Promise<DictionaryDOM> {
        try {
            const itemDAL = this.fromDomToDal(item);
            const result = await Dictionary.create(itemDAL);

            const resDAL = result.get({ plain: true });
            const resDOM = this.fromDalToDom(resDAL);
            return resDOM;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async update(
        id: number,
        item: DictionaryDOM
    ): Promise<DictionaryDOM | null> {
        try {
            const response = await Dictionary.update(this.fromDomToDal(item), {
                where: {
                    id: id,
                },
                returning: true,
            });

            const result = response[1];
            const resDAL = result[0].get({ plain: true });
            const resDOM = resDAL !== null ? this.fromDalToDom(resDAL) : null;
            return resDOM;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async delete(id: number): Promise<number> {
        try {
            const res = await Dictionary.destroy({
                where: {
                    id: id,
                },
            });

            return res;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async getAll(filter: IDictionaryFDOM): Promise<DictionaryDOM[]> {
        try {
            const result = await Dictionary.findAll({
                where: this.filterDomToDal(filter),
            });

            const resDAL = result.map((result) => result.get({ plain: true }));
            const resDOM = resDAL.map(this.fromDalToDom);
            return resDOM;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async getOne(id: number): Promise<DictionaryDOM | null> {
        try {
            const result = await Dictionary.findByPk(id);

            if (result) {
                const resDAL = result.get({ plain: true });
                const resDOM = this.fromDalToDom(resDAL);
                return resDOM;
            } else {
                return null;
            }
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async countRegisters(filter: IDictionaryFDOM): Promise<number> {
        try {
            return await Dictionary.count({
                where: this.filterDomToDal(filter),
            });
        } catch (error) {
            throw new StorageError(error);
        }
    }

    fromDomToDal(item: DictionaryDOM): DictionaryDAL {
        const entity = new DictionaryDAL({
            id: item.id,
            descripcion: item.descripcion,
            termino: item.termino,
        });

        return entity;
    }

    fromDalToDom(item: DictionaryDAL): DictionaryDOM {
        const entity = new DictionaryDOM({
            id: item.id,
            descripcion: item.descripcion,
            termino: item.termino,
        });

        return entity;
    }

    filterDomToDal(item: IDictionaryFDOM): IDictionaryFDAL {
        const mapFilter: IDictionaryFDAL = {};

        for (const key in item) {
            switch (key) {
                case 'id':
                    mapFilter[key] = item[key];
                    break;
                case 'termino':
                    mapFilter[camelToSnake(key)] = {
                        [Op.iLike]: `${item[key]}%`,
                    };
                    break;
                case 'descripcion':
                    mapFilter[camelToSnake(key)] = {
                        [Op.iLike]: `${item[key]}%`,
                    };
                    break;
            }
        }

        return mapFilter;
    }
}
