import { DictionarysSQLImplementation } from '@fnd/storage/sql/implementation/dictionary/dictionary_imp';
import { DictionarysRepository } from '../interface_adapters/repositories/dictionary_repository';
import { build as buildCreateOne } from './use_cases/create_one';
import { build as buildGetAll } from './use_cases/get_all';
import { build as buildDeleteOne } from './use_cases/delete_one';
import { build as buildUpdateOne } from './use_cases/update_one';

const dictionarysRepo: DictionarysRepository = new DictionarysRepository(
    new DictionarysSQLImplementation()
);

const createOne = buildCreateOne({ dictionarysRepo });
const getAll = buildGetAll({ dictionarysRepo });
const deleteOne = buildDeleteOne({ dictionarysRepo });
const updateOne = buildUpdateOne({ dictionarysRepo });

const service = {
    createOne,
    getAll,
    deleteOne,
    updateOne,
};

export default service;

export { createOne, getAll, deleteOne, updateOne };
