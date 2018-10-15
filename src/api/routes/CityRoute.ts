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
            const cities: City[] = data.map((data: any) => ({
                '100m+': parseInt(data['100m+']),
                '150m+': parseInt(data['150m+']),
                '200m+': parseInt(data['200m+']),
                '300m+': parseInt(data['300m+']),
                allBuildings: parseInt(data['All\nBuildings']),
                allStructures: parseInt(data['All\nStructures']),
                country: data['Country'],
                id: parseInt(data['#']),
                name: data['City'],
                telecomTowers: parseInt(data['Telecom\nTowers']),
            }));

            response.json(cities);
        } catch (e) {
            return this.handleError(next, new RequestException(INTERNAL_SERVER_ERROR, ['unable to get city data']));
        }
    }
}
