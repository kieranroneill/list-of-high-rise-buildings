import {
    Express,
    Request,
    Response,
    static as serveStatic,
} from 'express';
import {
    join,
    resolve,
} from 'path';

// Routes.
// import { CityRoute } from './routes/CityRoute';
//
// type Route = CityRoute;

export function webRoutes(app: Express): void {
    const rootPath: string = join(__dirname, '..', '..');
    const webPath: string = resolve(rootPath, 'dist', 'web');

    // Serve static assets.
    app.use(serveStatic(webPath));

    // Route all other requests back to the client HTML.
    app.get('*', (request: Request, response: Response) => response.sendFile(resolve(webPath, 'index.html')));
}

export function apiRoutes(app: Express): void {
    // const routes: Array<Route> = [
    //     new CityRoute(),
    // ];
    //
    // // Set up api routes.
    // routes.forEach((route: Route) => route.registerRoutes(app));
}
