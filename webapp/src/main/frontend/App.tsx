import React, {FC, useState} from "react";
import {ControlPanel} from "./ControlPanel";
import {restAliveConfigurationProvider} from "./logic/AliveConfigProvider";
import {restEventsRetriever} from "./logic/EventDataRetriever";
import {ErrorMessage} from "./ErrorMessage";
import {server} from "./server/Server";

if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_STAGE === 'dev') {
    server();
}

export const App: FC = () => {
    const [retrieveError, setRetrieveError] = useState<boolean>(false);

    return <>
        <ControlPanel
            aliveConfigProvider={() => restAliveConfigurationProvider()}
            eventsRetriever={() => restEventsRetriever()}
            onError={() => setRetrieveError(true)}
        />
        {retrieveError && <ErrorMessage onClose={() => setRetrieveError(false)}/>}
    </>
}