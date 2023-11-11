import {createServer, Server, Response} from "miragejs";

const aliveResponse = {
    alive: true,
    message: "Hey!"
};


const alive200 = (): Response => new Response(200, {}, aliveResponse);

export const server: () => Server = () =>
    createServer({
        logging: true,
        routes() {
            this.get('/api/alive', alive200);
        },
    });