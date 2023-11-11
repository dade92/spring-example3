import {staticRestClient} from "./RestClient";

export interface AliveConfiguration {
    alive: boolean;
    message: string;
}

export type AliveConfigProvider = () => Promise<AliveConfiguration>

export const restAliveConfigurationProvider: AliveConfigProvider = async () => {
    try {
        return await staticRestClient.get<AliveConfiguration>('/alive')
    } catch (e) {
        console.log('Error retrieving config');
        return Promise.resolve({alive: false, message: ''})
    }
}