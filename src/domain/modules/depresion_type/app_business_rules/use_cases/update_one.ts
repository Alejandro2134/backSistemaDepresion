import { ErrorBadRequest } from '@common/enterprise_business_rules/dto/errors/bad_request';
import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';
import {
    DepresionTypeDOM,
    IDepresionTypeDOM,
    IDepresionTypeFDOM,
} from '@depresion_type/enterprise_business/entities/depresion_type/depresion_type_dom';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';

type Dependencies = {
    depresionTypesRepo: IOperations<DepresionTypeDOM, IDepresionTypeFDOM>;
};

const DEPRESION_TYPE_NOT_FOUND_ERROR = 'depresion type not found';
const DEPRESION_TYPE_CANT_BE_UPDATED_ERROR = 'depresion type cant be updated';

const build = ({ depresionTypesRepo }: Dependencies) => {
    const execute = async (id: number, item: IDepresionTypeDOM) => {
        const depresionType = await depresionTypesRepo.getAll({ id: id });
        console.log(depresionType);
        if (depresionType[0]) {
            const updateDepresionType =
                depresionType[0].updateDepresionType(item);
            console.log(updateDepresionType);
            const result = await depresionTypesRepo.update(
                id,
                updateDepresionType
            );
            if (!result)
                throw new ErrorBadRequest(DEPRESION_TYPE_CANT_BE_UPDATED_ERROR);

            return result;
        } else {
            throw new ErrorResourceNotFound(DEPRESION_TYPE_NOT_FOUND_ERROR);
        }
    };

    return execute;
};

export { build };
