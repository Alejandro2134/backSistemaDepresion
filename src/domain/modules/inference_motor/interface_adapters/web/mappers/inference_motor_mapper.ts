import { IMapperAPI } from '@common/interface_adapters/web/controllers/bases/imapperapi';
import { fromCamelToSnake } from '@fnd/helpers/from_camel_to_snake';
import { fromSnakeToCamel } from '@fnd/helpers/from_snake_to_camel';
import { InferenceMotorAPI } from '@inference_motor/enterprise_business/dto/inference_motor_api';
import { InferenceMotorDOM } from '@inference_motor/enterprise_business/entities/interface_motor_dom';

export class InferenceMotorMapper
    implements IMapperAPI<InferenceMotorDOM, InferenceMotorAPI>
{
    fromApiToDom(item: InferenceMotorAPI, opts?: any): InferenceMotorDOM {
        const dom = new InferenceMotorDOM({
            idPreguntaRespondida: item.id_pregunta_respondida,
            preguntaAResponder: fromSnakeToCamel(item.pregunta_a_responder),
            preguntasAResponder:
                item.preguntas_a_responder.map(fromSnakeToCamel),
            tiposDepresionPreguntaAResponder:
                item.tipos_depresion_pregunta_a_responder,
            preguntasRespondidas: item.preguntas_respondidas,
            respuesta: item.respuesta,
            sintomasPreguntaAResponder: item.sintomas_pregunta_a_responder,
            puntoInicial: item.punto_inicial,
            conteoSintomas: item.conteo_sintomas.map(fromSnakeToCamel),
            tipoDepresion: item.tipo_depresion,
        });

        return dom;
    }

    fromDomToApi(item: InferenceMotorDOM, opts?: any): InferenceMotorAPI {
        const api = new InferenceMotorAPI({
            id_pregunta_respondida: item.idPreguntaRespondida,
            pregunta_a_responder: fromCamelToSnake(item.preguntaAResponder),
            preguntas_a_responder:
                item.preguntasAResponder.map(fromCamelToSnake),
            preguntas_respondidas: item.preguntasRespondidas,
            respuesta: item.respuesta,
            sintomas_pregunta_a_responder: item.sintomasPreguntaAResponder,
            punto_inicial: item.puntoInicial,
            conteo_sintomas: item.conteoSintomas.map(fromCamelToSnake),
            tipo_depresion: item.tipoDepresion,
            tipos_depresion_pregunta_a_responder:
                item.tiposDepresionPreguntaAResponder,
        });

        return api;
    }
}

const mapper = new InferenceMotorMapper();

export default mapper;
