import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App'
import {restAliveConfigurationProvider} from "./logic/AliveConfigProvider";
import {ConfigurationContent} from "./ConfigurationContent";

ReactDOM.render(
    <ConfigurationContent/>,
    document.getElementById('react')
)