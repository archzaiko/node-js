import { HttpStatusCode } from './http-status-code.enum';

export class AppError extends Error {
  status: HttpStatusCode;
  title: string;
  message: string;
  data: unknown;

  constructor({ status, message, data, title }) {
    super(message);

    this.status = status;
    this.title = title;
    this.message = message;
    this.data = data;
  }
}
