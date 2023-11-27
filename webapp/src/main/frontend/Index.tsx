import React from 'react';
import ReactDOM from 'react-dom';
import {ControlPanel} from './ControlPanel'
import {restAliveConfigurationProvider} from "./logic/AliveConfigProvider";
import {restEventsRetriever} from "./logic/EventDataRetriever";
import {App} from "./App";

ReactDOM.render(
    <App />,
    document.getElementById('react')
)