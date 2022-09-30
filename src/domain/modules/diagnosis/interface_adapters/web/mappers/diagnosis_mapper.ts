import { IMapperAPI } from '@common/interface_adapters/web/controllers/bases/imapperapi';
import { DiagnosisAPI } from '@diagnosis/enterprise_business/dto/diagnosis_api';
import { DiagnosisDOM } from '@diagnosis/enterprise_business/entities/diagnosis_dom';

export class DiagnosisMapper implements IMapperAPI<DiagnosisDOM, DiagnosisAPI> {
    fromApiToDom(item: DiagnosisAPI, opts?: any): DiagnosisDOM {
        const dom = new DiagnosisDOM({
            id: item.id,
            cedula: item.cedula,
            nombre: item.nombre,
            resultado: item.resultado,
        });

        return dom;
    }

    fromDomToApi(item: DiagnosisDOM, opts?: any): DiagnosisAPI {
        const api = new DiagnosisAPI({
            id: item.id,
            cedula: item.cedula,
            nombre: item.nombre,
            resultado: item.resultado,
        });

        return api;
    }
}

const mapper = new DiagnosisMapper();

export default mapper;
