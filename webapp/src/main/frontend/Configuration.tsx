import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App'
import {restAliveConfigurationProvider} from "./logic/AliveConfigProvider";

ReactDOM.render(
    <span>Configuration injected!</span>,
    document.getElementById('react')
)