import React, {useEffect, useState} from "react";
import {Button, LinearProgress, Switch, Typography} from "@mui/material";
import {AliveConfigProvider} from "./logic/AliveConfigProvider";
import styled from "styled-components";
import {server} from "./server/Server";
import {Loader} from "./Loader";

interface Props {
    aliveConfigProvider: AliveConfigProvider
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

if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_STAGE === 'dev') {
    server();
}

export const App: React.FC<Props> = ({aliveConfigProvider}) => {
    const [alive, setAlive] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);

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
            <Button data-testid={'button'}
                    variant="contained"
                    onClick={() => console.log('clicked')}
                    disabled={!checked}>Click me</Button>
            <Switch checked={checked} onChange={() => setChecked(!checked)}/>
            <Loader/>
        </Wrapper>
    )
}