import React, {useEffect, useState} from "react";
import {Button, LinearProgress, Switch, Typography} from "@mui/material";
import {AliveConfigProvider} from "./logic/AliveConfigProvider";
import styled from "styled-components";
import {server} from "./server/Server";
import {Loader} from "./Loader";
import {AppEvent, EventsRetriever} from "./logic/EventDataRetriever";
import {EventList} from "./EventList";
import {ErrorMessage} from "./ErrorMessage";
import {EventFetcher} from "./EventFetcher";

interface Props {
    aliveConfigProvider: AliveConfigProvider
    eventsRetriever: EventsRetriever
    onError: () => void;
}

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 30%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`

export const ControlPanel: React.FC<Props> = ({aliveConfigProvider, eventsRetriever, onError}) => {
    const [alive, setAlive] = useState<boolean>(false);

    useEffect(() => {
        aliveConfigProvider()
            .then((aliveConfig) => {
                setAlive(aliveConfig.alive);
            })
            .catch(() => console.log('error calling API'));
    }, []);

    return (
        <Wrapper>
            {alive ? <Typography data-testid={'up-and-running'}>server up and running!</Typography> :
                <LinearProgress data-testid={'progress'}/>}
            <EventFetcher eventsRetriever={eventsRetriever} onError={onError}/>
        </Wrapper>
    )
}