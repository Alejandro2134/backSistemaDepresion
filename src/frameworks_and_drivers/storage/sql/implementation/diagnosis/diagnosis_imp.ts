import { StorageError } from '@common/enterprise_business_rules/dto/errors/storage_error';
import {
    DiagnosisDOM,
    IDiagnosisFDOM,
} from 'domain/modules/diagnosis/enterprise_business/entities/diagnosis_dom';
import { Op } from 'sequelize';
import { BaseImplementation } from '../../client/driver/base_sql_impl';
import { IOptions } from '../../client/interfaces/ioperations';
import { IFilterWrapper, IWrapper } from '../../client/interfaces/iwrapper';
import { Diagnosis } from '../../models/diagnosis/Diagnosis';
import {
    DiagnosisDAL,
    IDiagnosisFDAL,
} from '../../models/diagnosis/diagnosis_dal';

export class DiagnosisSQLImplementation
    extends BaseImplementation<DiagnosisDOM, IDiagnosisFDOM>
    implements
        IWrapper<DiagnosisDOM, DiagnosisDAL>,
        IFilterWrapper<IDiagnosisFDOM, IDiagnosisFDAL>
{
    async create(item: DiagnosisDOM): Promise<DiagnosisDOM> {
        try {
            const itemDAL = this.fromDomToDal(item);
            const result = await Diagnosis.create(itemDAL);

            const resDAL = result.get({ plain: true });
            const resDOM = this.fromDalToDom(resDAL);
            return resDOM;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async update(id: number, item: DiagnosisDOM): Promise<DiagnosisDOM | null> {
        try {
            const response = await Diagnosis.update(this.fromDomToDal(item), {
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
            const res = await Diagnosis.destroy({
                where: {
                    id: id,
                },
            });

            return res;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async getAll(
        filter: IDiagnosisFDOM,
        options: IOptions
    ): Promise<DiagnosisDOM[]> {
        try {
            const result = await Diagnosis.findAll({
                where: this.filterDomToDal(filter),
            });

            const resDAL = result.map((result) => result.get({ plain: true }));
            const resDOM = resDAL.map(this.fromDalToDom);
            return resDOM;
        } catch (error) {
            throw new StorageError(error);
        }
    }

    async getOne(id: number): Promise<DiagnosisDOM | null> {
        try {
            const result = await Diagnosis.findByPk(id);

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

    async countRegisters(filter: IDiagnosisFDOM): Promise<number> {
        try {
            return await Diagnosis.count({
                where: this.filterDomToDal(filter),
            });
        } catch (error) {
            throw new StorageError(error);
        }
    }

    filterDomToDal(item: IDiagnosisFDOM): IDiagnosisFDAL {
        const mapFilter: IDiagnosisFDAL = {};

        for (const key in item) {
            switch (key) {
                case 'cedula':
                    mapFilter[key] = {
                        [Op.iLike]: `${item[key]}%`,
                    };
                    break;
                case 'nombre':
                    mapFilter[key] = {
                        [Op.iLike]: `${item[key]}%`,
                    };
                    break;
            }
        }

        return mapFilter;
    }

    fromDomToDal(item: DiagnosisDOM): DiagnosisDAL {
        const itemDAL = new DiagnosisDAL({
            cedula: item.cedula,
            nombre: item.nombre,
            resultado: item.resultado,
            id: item.id,
        });

        return itemDAL;
    }

    fromDalToDom(item: DiagnosisDAL): DiagnosisDOM {
        const itemDOM = new DiagnosisDOM({
            cedula: item.cedula,
            nombre: item.nombre,
            resultado: item.resultado,
            id: item.id,
        });

        return itemDOM;
    }
}
