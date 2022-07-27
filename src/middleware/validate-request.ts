import { RequestHandler } from 'express';
import { validateOrReject, ValidationError } from 'class-validator';

import { DtoValidator } from './dto-validator.interface';
import { HttpStatusCode } from '../common/http-status-code.enum';
import { AppError } from '../common/app-error';

export const validateRequest = (validator: DtoValidator): RequestHandler => async (req, res, next) => {
  const payload = new validator(req.body);
  try {
    await validateOrReject(payload as object, { validationError: { target: false } });
    next();
  } catch (errors) {
    const messages = errors.reduce((acc: [], item: ValidationError) => {
      return [ ...acc, ...Object.values(item.constraints) ];
    }, []);
    const appError = new AppError({
      status: HttpStatusCode.BadRequest,
      title: 'Bad request',
      message: 'Incorrect payload data',
      data: messages,
    });
    next(appError);
  }
};
