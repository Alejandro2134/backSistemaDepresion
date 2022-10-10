import { IQuestionDOM } from '@questions/enterprise_business/entities/question/question_dom';

export interface IInferenceMotorDOM {
    idPreguntaRespondida: number;
    respuesta: boolean;
    tiposDepresionPreguntaAResponder: number[];
    sintomasPreguntaAResponder: number[];
    preguntasRespondidas: number[];
    preguntasAResponder: IQuestionDOM[];
    preguntaAResponder: IQuestionDOM | null;
    puntoInicial: boolean;
    conteoSintomas: IConteoSintomas[];
    tipoDepresion: null | string;
}

export interface IConteoSintomas {
    idTipoDepresion: number;
    conteo: number;
}

export class InferenceMotorDOM implements IInferenceMotorDOM {
    idPreguntaRespondida: number;
    respuesta: boolean;
    tiposDepresionPreguntaAResponder: number[];
    sintomasPreguntaAResponder: number[];
    preguntasRespondidas: number[];
    preguntasAResponder: IQuestionDOM[];
    preguntaAResponder: IQuestionDOM | null;
    puntoInicial: boolean;
    conteoSintomas: IConteoSintomas[];
    tipoDepresion: null | string;

    constructor(item: IInferenceMotorDOM) {
        this.respuesta = item.respuesta;
        this.idPreguntaRespondida = item.idPreguntaRespondida;
        this.sintomasPreguntaAResponder = item.sintomasPreguntaAResponder;
        this.tiposDepresionPreguntaAResponder =
            item.tiposDepresionPreguntaAResponder;
        this.preguntasRespondidas = item.preguntasRespondidas;
        this.preguntasAResponder = item.preguntasAResponder;
        this.preguntaAResponder = item.preguntaAResponder;
        this.puntoInicial = item.puntoInicial;
        this.conteoSintomas = item.conteoSintomas;
        this.tipoDepresion = item.tipoDepresion;
    }
}
