import { DictionarysSQLImplementation } from '@fnd/storage/sql/implementation/dictionary/dictionary_imp';
import { DictionarysRepository } from '../interface_adapters/repositories/dictionary_repository';
import { build as buildCreateOne } from './use_cases/create_one';

const dictionarysRepo: DictionarysRepository = new DictionarysRepository(
    new DictionarysSQLImplementation()
);

const createOne = buildCreateOne({ dictionarysRepo });

const service = {
    createOne,
};

export default service;

export { createOne };
