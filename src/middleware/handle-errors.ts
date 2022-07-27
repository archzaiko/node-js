import { ErrorRequestHandler } from 'express';

export const handleErrors: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err);
  res.status(err.status).json(err);
  next();
};
