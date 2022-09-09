import { IMapperAPI } from '@common/interface_adapters/web/controllers/bases/imapperapi';
import { DictionaryAPI } from '@dictionary/enterprise_business/dto/dictionary_api';
import { DictionaryDOM } from '@dictionary/enterprise_business/entities/dictionary_dom';

export class DictionaryMapper
    implements IMapperAPI<DictionaryDOM, DictionaryAPI>
{
    fromApiToDom(item: DictionaryAPI, opts?: any): DictionaryDOM {
        const dom = new DictionaryDOM({
            id: item.id,
            descripcion: item.descripcion,
            termino: item.termino,
        });

        return dom;
    }

    fromDomToApi(item: DictionaryDOM, opts?: any): DictionaryAPI {
        const api = new DictionaryAPI({
            id: item.id,
            descripcion: item.descripcion,
            termino: item.termino,
        });

        return api;
    }
}

const mapper = new DictionaryMapper();

export default mapper;
