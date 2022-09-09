import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    IDictionaryFDOM,
    DictionaryDOM,
} from '../../enterprise_business/entities/dictionary_dom';

type Dependencies = {
    dictionarysRepo: IOperations<DictionaryDOM, IDictionaryFDOM>;
};

const build = ({ dictionarysRepo }: Dependencies) => {
    const execute = async (item: DictionaryDOM) => {
        const createdDictionary = await dictionarysRepo.create(item);
        return createdDictionary;
    };

    return execute;
};

export { build };
