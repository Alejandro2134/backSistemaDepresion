import { IQuestionAPI } from '@questions/enterprise_business/dto/question_api';

export interface IInferenceMotorAPI {
    id_pregunta_respondida: number;
    respuesta: boolean;
    tipos_depresion_pregunta_a_responder: number[];
    sintomas_pregunta_a_responder: number[];
    preguntas_respondidas: number[];
    preguntas_a_responder: IQuestionAPI[];
    pregunta_a_responder: IQuestionAPI;
    punto_inicial: boolean;
    conteo_sintomas: IConteoSintomas[];
    tipo_depresion: null | string;
}

interface IConteoSintomas {
    id_tipo_depresion: number;
    conteo: number;
}

export class InferenceMotorAPI implements IInferenceMotorAPI {
    id_pregunta_respondida: number;
    respuesta: boolean;
    tipos_depresion_pregunta_a_responder: number[];
    sintomas_pregunta_a_responder: number[];
    preguntas_respondidas: number[];
    preguntas_a_responder: IQuestionAPI[];
    pregunta_a_responder: IQuestionAPI;
    punto_inicial: boolean;
    conteo_sintomas: IConteoSintomas[];
    tipo_depresion: null | string;

    constructor(item: IInferenceMotorAPI) {
        this.respuesta = item.respuesta;
        this.id_pregunta_respondida = item.id_pregunta_respondida;
        this.tipos_depresion_pregunta_a_responder =
            item.tipos_depresion_pregunta_a_responder;
        this.sintomas_pregunta_a_responder = item.sintomas_pregunta_a_responder;
        this.preguntas_respondidas = item.preguntas_respondidas;
        this.preguntas_a_responder = item.preguntas_a_responder;
        this.pregunta_a_responder = item.pregunta_a_responder;
        this.punto_inicial = item.punto_inicial;
        this.conteo_sintomas = item.conteo_sintomas;
        this.tipo_depresion = item.tipo_depresion;
    }
}
