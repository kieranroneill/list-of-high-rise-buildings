export default class BaseException extends Error {
    public errors: string[];

    constructor(errors: string[]) {
        super();

        this.errors = errors;
    }
}
