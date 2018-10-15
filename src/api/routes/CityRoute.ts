import * as csv from 'csvtojson';
import { NextFunction, Request, Response } from 'express';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { join } from 'path';

// Config.
import { endpoints } from '../config/defaults';

// Exceptions.
import RequestException from '../exceptions/RequestException';

// Routes.
import BaseRoute, { Method } from './BaseRoute';

export class CityRoute extends BaseRoute {
    constructor() {
        super();

        this.routes = [
            {
                callback: this.getCities.bind(this),
                method: Method.Get,
                route: `${endpoints.api.city}`,
            },
        ];
    }

    private async getCities(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const data: any[] = await csv().fromFile(join(__dirname, '..', 'data', 'cities.csv'));

            response.json(data);
        } catch (e) {
            return this.handleError(next, new RequestException(INTERNAL_SERVER_ERROR, ['unable to get city data']));
        }
    }
}
