import { AppError } from './app-error';
export class BadError extends AppError{
    constructor(err){super(err)}
}