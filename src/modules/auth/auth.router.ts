import { Router } from 'express';
import { json } from 'body-parser';

import { LoginPayload } from './dto/login-payload.dto';
import { validateRequest } from '../../middleware/validate-request';

import { AuthService } from './auth.service';

const authService = new AuthService();

const authRouter = Router();

authRouter.post('/login', json(), validateRequest(LoginPayload), (req, res, next): void => {
  try {
    const { username, password }: LoginPayload = req.body;
    res.status(200).json({ username, password });
    next();
  } catch (err) {
    next(err);
  }
});

export {
  authRouter,
};
