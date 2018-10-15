// Exceptions.
import BaseException from './BaseException';

export default class RequestException extends BaseException {
    public status: number;

    constructor(status: number, errors: string[]) {
        super(errors);

        this.status = status;
    }
}
