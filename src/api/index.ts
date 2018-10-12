import { createServer, Server } from 'http';

import { app } from './app';

const server: Server = createServer(app);

server.listen((process.env.PORT || 1337), () => {
    console.log('Server started');
    console.dir(server.address());
});
