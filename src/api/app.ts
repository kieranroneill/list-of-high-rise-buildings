import { config } from 'dotenv';
import * as Express from 'express';

// Middlewares.
// import { customErrorHandler } from './middlewares/ErrorMiddlware';

// Router.
import { apiRoutes, webRoutes } from './router';

const app = Express();

//====================================================
// Configuration.
//====================================================

config();

//====================================================
// Routes.
//====================================================

apiRoutes(app);
webRoutes(app);

// Catch the errors.
// app.use(customErrorHandler());

export { app };
