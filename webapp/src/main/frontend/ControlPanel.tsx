import React, {useEffect, useState} from "react";
import {LinearProgress, Typography} from "@mui/material";
import {AliveConfigProvider} from "./logic/AliveConfigProvider";
import styled from "styled-components";
import {EventsRetriever} from "./logic/EventDataRetriever";
import {EventsFetcher} from "./EventsFetcher";

interface Props {
    aliveConfigProvider: AliveConfigProvider
    eventsRetriever: EventsRetriever
    onFetchEventsError: () => void;
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

export const ControlPanel: React.FC<Props> = ({aliveConfigProvider, eventsRetriever, onFetchEventsError}) => {
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
            {alive ?
                <Typography data-testid={'up-and-running'}>server up and running!</Typography> :
                <LinearProgress data-testid={'progress'}/>
            }
            <EventsFetcher eventsRetriever={eventsRetriever} onError={onFetchEventsError}/>
        </Wrapper>
    )
}