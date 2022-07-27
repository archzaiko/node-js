import express, { Express } from 'express';

import { appRouter } from './app.router';

import { handleErrors } from './middleware/handle-errors';

const app = express();

app.use(appRouter);

app.use((req, res, next) => {
  next({
    message: 'Not found',
  });
});

app.use(handleErrors);

export const getApplication = (): Express => app;
