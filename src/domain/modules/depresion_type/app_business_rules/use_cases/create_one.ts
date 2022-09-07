import {
    DepresionTypeDOM,
    IDepresionTypeFDOM,
} from '@depresion_type/enterprise_business/entities/depresion_type/depresion_type_dom';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';

type Dependencies = {
    depresionTypesRepo: IOperations<DepresionTypeDOM, IDepresionTypeFDOM>;
};

const build = ({ depresionTypesRepo }: Dependencies) => {
    const execute = async (item: DepresionTypeDOM) => {
        const createdQuestion = await depresionTypesRepo.create(item);
        return createdQuestion;
    };

    return execute;
};

export { build };
