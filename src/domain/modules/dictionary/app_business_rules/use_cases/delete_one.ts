import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    DictionaryDOM,
    IDictionaryFDOM,
} from '@dictionary/enterprise_business/entities/dictionary_dom';

type Dependencies = {
    dictionarysRepo: IOperations<DictionaryDOM, IDictionaryFDOM>;
};

const build = ({ dictionarysRepo }: Dependencies) => {
    const execute = async (dictionaryId: number) => {
        const res = await dictionarysRepo.delete(dictionaryId);
        if (res == 0)
            throw new ErrorResourceNotFound(`dictionary doesn't exists`);
    };

    return execute;
};

export { build };
