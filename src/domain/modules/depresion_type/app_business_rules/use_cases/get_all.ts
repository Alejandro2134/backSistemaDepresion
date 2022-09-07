import {
    DepresionTypeDOM,
    IDepresionTypeFDOM,
} from '@depresion_type/enterprise_business/entities/depresion_type/depresion_type_dom';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';

type Dependencies = {
    depresionTypesRepo: IOperations<DepresionTypeDOM, IDepresionTypeFDOM>;
};

const build = ({ depresionTypesRepo }: Dependencies) => {
    const findAll = async (filter: IDepresionTypeFDOM) => {
        return await depresionTypesRepo.getAll(filter);
    };

    const count = async (filter: IDepresionTypeFDOM) => {
        return await depresionTypesRepo.countRegisters(filter);
    };

    return {
        findAll,
        count,
    };
};

export { build };
