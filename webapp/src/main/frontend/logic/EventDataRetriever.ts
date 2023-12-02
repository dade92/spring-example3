import {staticRestClient} from "./RestClient";

export interface Events {
    events: AppEvent[];
}

export interface AppEvent {
    message: string;
}

export type EventsRetriever = () => Promise<Events>;

export const restEventsRetriever: EventsRetriever = async () => {
    try {
        return await staticRestClient.get<Events>('/events')
    } catch (e) {
        console.log('Error retrieving config');
        throw e;
    }
}