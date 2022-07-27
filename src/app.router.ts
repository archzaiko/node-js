import { Router } from 'express';

import { authRouter } from './modules/auth';

const appRouter = Router();

appRouter.use('/auth', authRouter);

export { appRouter };
