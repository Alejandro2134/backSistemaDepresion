import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';
import {
    DepresionTypeDOM,
    IDepresionTypeFDOM,
} from '@depresion_type/enterprise_business/entities/depresion_type/depresion_type_dom';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    IQuestionDOM,
    IQuestionFDOM,
    QuestionDOM,
} from '@questions/enterprise_business/entities/question/question_dom';
import {
    ISymptomFDOM,
    SymptomDOM,
} from '@symptoms/enterprise_business/entities/symptom/symptom_dom';

import {
    IConteoSintomas,
    InferenceMotorDOM,
} from '../../enterprise_business/entities/interface_motor_dom';

type Dependencies = {
    questionsRepo: IOperations<QuestionDOM, IQuestionFDOM>;
    depresionTypesRepo: IOperations<DepresionTypeDOM, IDepresionTypeFDOM>;
    symptomsRepo: IOperations<SymptomDOM, ISymptomFDOM>;
};

const QUESTIONS_NOT_FOUND = 'No more questions found';

const build = ({
    questionsRepo,
    depresionTypesRepo,
    symptomsRepo,
}: Dependencies) => {
    const execute = async (item: InferenceMotorDOM) => {
        //Si es la primera pregunta se envia una random
        if (item.idPreguntaRespondida == 0) {
            return await sendRandomQuestion(item);
        } else {
            //Si es una diferente a la primera se toman las preguntas ya respondidas y se pushean a las ya existentes
            const answeredQuestions = item.preguntasRespondidas;
            answeredQuestions.push(item.idPreguntaRespondida);

            //Si la respuesta a la pregunta es si
            if (item.respuesta) {
                //Se recorren los sintomas de la pregunta a responder
                for (const sintoma of item.sintomasPreguntaAResponder) {
                    const detailSymptom = await symptomsRepo.getOne(sintoma);

                    if (detailSymptom?.depresionTypes) {
                        for (const depresionType of detailSymptom.depresionTypes) {
                            //Se verifica si el tipo de depresión ya existe en el conteo de sintomas
                            const index = item.conteoSintomas.findIndex(
                                (e) => e.idTipoDepresion == depresionType.id
                            );

                            if (index > -1) {
                                //Si existe se amuenta en 1 el conteo para ese tipo de depresión
                                item.conteoSintomas[index].conteo =
                                    item.conteoSintomas[index].conteo + 1;
                            } else {
                                //Si no se pushea en el arreglo con valor inicial de 1
                                item.conteoSintomas.push({
                                    conteo: 1,
                                    idTipoDepresion: depresionType.id
                                        ? depresionType.id
                                        : 0,
                                });
                            }
                        }
                    }
                }

                const depresionTypes = await Promise.all(
                    item.conteoSintomas.map(async (conteo) => {
                        const depresionType = await depresionTypesRepo.getOne(
                            conteo.idTipoDepresion
                        );

                        if (depresionType) {
                            if (
                                conteo.conteo >= depresionType.cantidadSintomas
                            ) {
                                return depresionType;
                            }
                        }
                    })
                );

                const filteredDepresionTypes = depresionTypes.filter((item) =>
                    item ? true : false
                );

                let stringDepresionTypes = '';
                for (let i = 0; i < filteredDepresionTypes.length; i++) {
                    if (i == filteredDepresionTypes.length - 1) {
                        stringDepresionTypes += `${filteredDepresionTypes[i]?.tipoDepresion}`;
                    } else {
                        stringDepresionTypes += `${filteredDepresionTypes[i]?.tipoDepresion}, `;
                    }
                }
                //Armar filtro de or, para las cantidades de sintomas, si 3 >= 2 o etc etc

                if (filteredDepresionTypes.length > 0) {
                    //Si se obtiene algo del filtro se entrega como respuesta el tipo de depresión
                    //Para el proceso y se muestra el tipo de depresión
                    return buildInferenceMotorDOM(
                        -1,
                        false,
                        null,
                        [],
                        [],
                        [],
                        true,
                        [],
                        stringDepresionTypes
                    );
                } else {
                    //Si no se traen las preguntas filtrando por sintomas y preguntas respondidas
                    const questions = await questionsRepo.getAll({
                        sintomas: item.sintomasPreguntaAResponder,
                        preguntasRespondidas: item.preguntasRespondidas,
                    });

                    if (questions.length > 0) {
                        //Si trae algo se devuelve la respuesta
                        return buildInferenceMotorDOM(
                            -1,
                            false,
                            questions[0],
                            questions[0].sintomas,
                            questions.slice(1, questions.length),
                            answeredQuestions,
                            true,
                            item.conteoSintomas,
                            null
                        );
                    } else {
                        throw new ErrorResourceNotFound(QUESTIONS_NOT_FOUND);
                    }
                }
                //SI las respuesta es que no
            } else {
                // Se verifica si ya se tiene un punto inicial
                if (item.puntoInicial) {
                    //Si lo hay
                    if (item.preguntasAResponder.length > 0) {
                        //Se envia la siguiente pregunta en cola
                        return buildInferenceMotorDOM(
                            -1,
                            false,
                            item.preguntasAResponder[0],
                            item.preguntasAResponder[0].sintomas,
                            item.preguntasAResponder.slice(
                                1,
                                item.preguntasAResponder.length
                            ),
                            answeredQuestions,
                            true,
                            item.conteoSintomas,
                            null
                        );
                    } else {
                        //Si no hay preguntas en cola se envia una al azar
                        return await sendRandomQuestion(item);
                    }
                } else {
                    //Si no hay punto inicial se envia una al azar
                    return await sendRandomQuestion(item);
                }
            }
        }
    };

    const sendRandomQuestion = async (item: InferenceMotorDOM) => {
        const questions = await questionsRepo.getAll({
            preguntasRespondidas: item.preguntasRespondidas,
        });

        if (questions.length > 0) {
            const answeredQuestions = item.preguntasRespondidas;
            const randomQuestion = Math.floor(Math.random() * questions.length);

            const inferenceMotor = buildInferenceMotorDOM(
                -1,
                false,
                questions[randomQuestion],
                questions[randomQuestion].sintomas,
                questions,
                answeredQuestions,
                false,
                item.conteoSintomas,
                null
            );

            inferenceMotor.preguntasAResponder.splice(randomQuestion, 1);
            return inferenceMotor;
        } else {
            throw new ErrorResourceNotFound(QUESTIONS_NOT_FOUND);
        }
    };

    const buildInferenceMotorDOM = (
        idPreguntaRespondida: number,
        respuesta: boolean,
        preguntaAResponder: IQuestionDOM | null,
        sintomasPreguntaAResponder: number[],
        preguntasAResponder: IQuestionDOM[],
        preguntasRespondidas: number[],
        puntoInicial: boolean,
        conteoSintomas: IConteoSintomas[],
        tipoDepresion: null | string
    ) => {
        const response = new InferenceMotorDOM({
            idPreguntaRespondida: idPreguntaRespondida,
            respuesta: respuesta,
            preguntaAResponder: preguntaAResponder,
            sintomasPreguntaAResponder: sintomasPreguntaAResponder,
            preguntasAResponder: preguntasAResponder,
            preguntasRespondidas: preguntasRespondidas,
            puntoInicial: puntoInicial,
            conteoSintomas: conteoSintomas,
            tipoDepresion: tipoDepresion,
        });

        return response;
    };

    //Filtro en tipos de depresión, por cantidad de sintomas y id de sintoma

    //Mandar pregunta al azar con get one y enviar toda la info de la pregunta
    //Si la respuesta a esa pregunta es true, se guardan los ids de las preguntas ya contestadas y se traen todas las preguntas filtrando por ids de sintomas y son enviadas
    //Se verifica que la pregunta en la primera posición del arreglo no haya sido ya respondid, si si, se pasa a la siguiente, si no, se envia

    return execute;
};

export { build };
