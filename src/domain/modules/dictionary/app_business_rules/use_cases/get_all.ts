import {
    DictionaryDOM,
    IDictionaryFDOM,
} from '@dictionary/enterprise_business/entities/dictionary_dom';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';

type Dependencies = {
    dictionarysRepo: IOperations<DictionaryDOM, IDictionaryFDOM>;
};

const build = ({ dictionarysRepo }: Dependencies) => {
    const findAll = async (filter: IDictionaryFDOM) => {
        return await dictionarysRepo.getAll(filter);
    };

    const count = async (filter: IDictionaryFDOM) => {
        return await dictionarysRepo.countRegisters(filter);
    };

    return {
        findAll,
        count,
    };
};

export { build };
