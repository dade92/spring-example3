import {createServer, Server, Response} from "miragejs";

const aliveResponse = {
    alive: true,
    message: "Hey!"
};

const eventsResponse = {
    events: [
        {
            message: 'first message'
        },
        {
            message: 'second message'
        }
    ]
};


const alive200 = (): Response => new Response(200, {}, aliveResponse);
const events200 = (): Response => new Response(200, {}, eventsResponse);
const events500 = (): Response => new Response(500, {});

export const server: () => Server = () =>
    createServer({
        logging: true,
        routes() {
            this.get('/api/alive', alive200, {timing: 1500});
            this.get('/api/events', events200, {timing: 1500});
        },
    });