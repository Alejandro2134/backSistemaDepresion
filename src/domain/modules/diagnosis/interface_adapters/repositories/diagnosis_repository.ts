import {
    DiagnosisDOM,
    IDiagnosisFDOM,
} from '@diagnosis/enterprise_business/entities/diagnosis_dom';
import {
    IOperations,
    IOptions,
} from '@fnd/storage/sql/client/interfaces/ioperations';

export class DiagnosisRepository
    implements IOperations<DiagnosisDOM, IDiagnosisFDOM>
{
    private implementation: IOperations<DiagnosisDOM, IDiagnosisFDOM>;

    constructor(implementation: IOperations<DiagnosisDOM, IDiagnosisFDOM>) {
        this.implementation = implementation;
    }

    async create(item: DiagnosisDOM): Promise<DiagnosisDOM> {
        return await this.implementation.create(item);
    }
    async update(id: number, item: DiagnosisDOM): Promise<DiagnosisDOM | null> {
        return await this.implementation.update(id, item);
    }
    async delete(id: number): Promise<number> {
        return await this.implementation.delete(id);
    }
    async getAll(
        filter: IDiagnosisFDOM,
        options?: IOptions
    ): Promise<DiagnosisDOM[]> {
        return await this.implementation.getAll(filter, options);
    }
    async getOne(id: number): Promise<DiagnosisDOM | null> {
        return await this.implementation.getOne(id);
    }
    async countRegisters(filter: IDiagnosisFDOM): Promise<number> {
        return await this.implementation.countRegisters(filter);
    }
}
