import { HTTPCodesEnum } from '@common/enterprise_business_rules/dto/enums/errors_enums';
import { ApiResponse } from '@common/enterprise_business_rules/dto/responses/api_response';
import service from '@inference_motor/app_business_rules';
import { NextFunction, Request, Response } from 'express';
import mapper from './mappers/inference_motor_mapper';

export class InferenceMotorController {
    async inferenceMotor(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;

            const result = await service.inferenceMotor(
                mapper.fromApiToDom(body)
            );
            res.status(HTTPCodesEnum.SUCCESSFUL).json(
                new ApiResponse(
                    HTTPCodesEnum.SUCCESSFUL,
                    mapper.fromDomToApi(result)
                )
            );
        } catch (error) {
            next(error);
        }
    }
}
