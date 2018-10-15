export default class BaseException extends Error {
    public errors: Array<string>;

    constructor(errors: Array<string>) {
        super();

        this.errors = errors;
    }
}
