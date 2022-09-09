import { ErrorBadRequest } from '@common/enterprise_business_rules/dto/errors/bad_request';
import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    DictionaryDOM,
    IDictionaryDOM,
    IDictionaryFDOM,
} from '@dictionary/enterprise_business/entities/dictionary_dom';

type Dependencies = {
    dictionarysRepo: IOperations<DictionaryDOM, IDictionaryFDOM>;
};

const DICTIONARY_NOT_FOUND_ERROR = 'dictionary not found';
const DICTIONARY_CANT_BE_UPDATED_ERROR = 'dictionary cant be updated';

const build = ({ dictionarysRepo }: Dependencies) => {
    const execute = async (id: number, item: IDictionaryDOM) => {
        const dictionary = await dictionarysRepo.getAll({ id: id });
        if (dictionary[0]) {
            const updateDictionary = dictionary[0].updateDictionary(item);
            const result = await dictionarysRepo.update(id, updateDictionary);
            if (!result)
                throw new ErrorBadRequest(DICTIONARY_CANT_BE_UPDATED_ERROR);

            return result;
        } else {
            throw new ErrorResourceNotFound(DICTIONARY_NOT_FOUND_ERROR);
        }
    };

    return execute;
};

export { build };
