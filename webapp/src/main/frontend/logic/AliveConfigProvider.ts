import {staticRestClient} from "./RestClient";

export interface AliveConfiguration {
    alive: boolean;
    message: string;
}

export type AliveConfigProvider = () => Promise<AliveConfiguration>

export const restAliveConfigurationProvider: AliveConfigProvider = () => {
    return staticRestClient.get<AliveConfiguration>('/alive')
        .then((aliveConfig) => {
            return aliveConfig
        }).catch(() => {
        console.log('Error retrieving config');
        return Promise.resolve({alive: false, message: ''})
    })
}