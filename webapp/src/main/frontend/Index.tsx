import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App'
import {restAliveConfigurationProvider} from "./logic/AliveConfigProvider";
import {restEventsRetriever} from "./logic/EventDataRetriever";

ReactDOM.render(
    <App aliveConfigProvider={() => restAliveConfigurationProvider()} eventsRetriever={() => restEventsRetriever()}/>,
    document.getElementById('react')
)