import {
    IDepresionTypeFDOM,
    DepresionTypeDOM,
} from '@depresion_type/enterprise_business/entities/depresion_type/depresion_type_dom';
import {
    IDepresionTypeFDAL,
    DepresionTypeDAL,
} from '@fnd/storage/sql/models/depresion_type/depresion_type_dal';
import { IFilterWrapper, IWrapper } from '../../client/interfaces/iwrapper';
import { DepresionType } from '@fnd/storage/sql/models/depresion_type/DepresionType';
import { StorageError } from '@common/enterprise_business_rules/dto/errors/storage_error';
import { BaseImplementation } from '../../client/driver/base_sql_impl';
import { camelToSnake } from '@fnd/helpers/from_camel_to_snake';
import { Op } from 'sequelize';

export class DepresionTypesSQLImplementation
    extends BaseImplementation<DepresionTypeDOM, IDepresionTypeFDOM>
    implements
        IWrapper<DepresionTypeDOM, DepresionTypeDAL>,
        IFilterWrapper<IDepresionTypeFDOM, IDepresionTypeFDAL>
{
    async create(item: DepresionTypeDOM): Promise<DepresionTypeDOM> {
        try {
            const itemDAL = this.fromDomToDal(item);
            const result = await DepresionType.create(itemDAL);

            const resDAL = result.get({ plain: true });
            const resDOM = this.fromDalToDom(resDAL);
            return resDOM;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async update(
        id: number,
        item: DepresionTypeDOM
    ): Promise<DepresionTypeDOM | null> {
        try {
            const response = await DepresionType.update(
                this.fromDomToDal(item),
                {
                    where: {
                        id: id,
                    },
                    returning: true,
                }
            );

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
            const res = await DepresionType.destroy({
                where: {
                    id: id,
                },
            });

            return res;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async getAll(filter: IDepresionTypeFDOM): Promise<DepresionTypeDOM[]> {
        try {
            const result = await DepresionType.findAll({
                where: this.filterDomToDal(filter),
            });

            const resDAL = result.map((result) => result.get({ plain: true }));
            const resDOM = resDAL.map(this.fromDalToDom);
            return resDOM;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async getOne(id: number): Promise<DepresionTypeDOM | null> {
        try {
            const result = await DepresionType.findByPk(id);

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

    async countRegisters(filter: IDepresionTypeFDOM): Promise<number> {
        try {
            return await DepresionType.count({
                where: this.filterDomToDal(filter),
            });
        } catch (error) {
            throw new StorageError(error);
        }
    }

    fromDomToDal(item: DepresionTypeDOM): DepresionTypeDAL {
        const entity = new DepresionTypeDAL({
            id: item.id,
            tipo_depresion: item.tipoDepresion,
            cantidad_sintomas: item.cantidadSintomas
        });

        return entity;
    }

    fromDalToDom(item: DepresionTypeDAL): DepresionTypeDOM {
        const entity = new DepresionTypeDOM({
            id: item.id,
            tipoDepresion: item.tipo_depresion,
            cantidadSintomas: item.cantidad_sintomas
        });

        return entity;
    }

    filterDomToDal(item: IDepresionTypeFDOM): IDepresionTypeFDAL {
        const mapFilter: IDepresionTypeFDAL = {};

        for (const key in item) {
            switch (key) {
                case 'id':
                    mapFilter[key] = item[key];
                    break;
                case 'tipoDepresion':
                    mapFilter[camelToSnake(key)] = {
                        [Op.iLike]: `${item[key]}%`,
                    };
                    break;
            }
        }

        return mapFilter;
    }
}
