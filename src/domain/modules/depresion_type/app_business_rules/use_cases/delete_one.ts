import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    DepresionTypeDOM,
    IDepresionTypeFDOM,
} from '@depresion_type/enterprise_business/entities/depresion_type/depresion_type_dom';

type Dependencies = {
    depresionTypesRepo: IOperations<DepresionTypeDOM, IDepresionTypeFDOM>;
};

const build = ({ depresionTypesRepo }: Dependencies) => {
    const execute = async (depresionTypeId: number) => {
        const res = await depresionTypesRepo.delete(depresionTypeId);
        if (res == 0)
            throw new ErrorResourceNotFound(`depresion type doesn't exists`);
    };

    return execute;
};

export { build };
