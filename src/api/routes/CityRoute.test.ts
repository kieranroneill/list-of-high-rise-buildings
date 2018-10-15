import { OK } from 'http-status-codes';
import { agent, Response } from 'supertest';

// Config.
import { endpoints } from '../config/defaults';

// Express.
import { app } from '../app';

describe('/api/city', () => {
    describe('GET /city', () => {
        it('should return a list of cities', async () => {
            const response: Response = await agent(app)
                .get(`${endpoints.api.base}${endpoints.api.city}`)
                .expect(OK);

            expect(response.body.length).toBeGreaterThan(0);
        });
    });
});
