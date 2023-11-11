import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App'
import {restAliveConfigurationProvider} from "./logic/AliveConfigProvider";

ReactDOM.render(
    <App aliveConfigProvider={() => restAliveConfigurationProvider()}/>,
    document.getElementById('react')
)