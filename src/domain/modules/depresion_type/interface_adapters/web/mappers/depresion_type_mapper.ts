import { IMapperAPI } from '@common/interface_adapters/web/controllers/bases/imapperapi';
import { DepresionTypeAPI } from '@depresion_type/enterprise_business/dto/depresion_type_api';
import { DepresionTypeDOM } from '@depresion_type/enterprise_business/entities/depresion_type/depresion_type_dom';
import { fromCamelToSnake } from '@fnd/helpers/from_camel_to_snake';

export class DepresionTypeMapper
    implements IMapperAPI<DepresionTypeDOM, DepresionTypeAPI>
{
    fromApiToDom(item: DepresionTypeAPI, opts?: any): DepresionTypeDOM {
        const dom = new DepresionTypeDOM({
            id: item.id,
            tipoDepresion: item.tipo_depresion,
            cantidadSintomas: item.cantidad_sintomas
        });

        return dom;
    }

    fromDomToApi(item: DepresionTypeDOM, opts?: any): DepresionTypeAPI {
        const api = new DepresionTypeAPI({
            id: item.id,
            tipo_depresion: item.tipoDepresion,
            cantidad_sintomas: item.cantidadSintomas
        });

        if (item.symptoms) {
            api.symptoms = item.symptoms.map(fromCamelToSnake);
        }

        return api;
    }
}

const mapper = new DepresionTypeMapper();

export default mapper;
