import { env } from 'process';
import { config } from 'dotenv';

// read environment variables from .env
config();

export const environment = {
  server: {
    port: env.PORT,
  },
  auth: {
    salt: env.SALT,
  },
};
