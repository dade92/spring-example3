import React, {useEffect, useState} from "react";
import {Button, LinearProgress, Typography} from "@mui/material";
import {restAliveConfigurationProvider} from "./logic/AliveConfigProvider";
import styled from "styled-components";
import {server} from "./server/Server";

interface Props {
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
  row-gap: 16px;
`

if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_STAGE === 'dev') {
    server();
}

export const App: React.FC<Props> = () => {
    const [alive, setAlive] = useState<boolean>(false);

    useEffect(() => {
        restAliveConfigurationProvider()
            .then((aliveConfig) => {
                setAlive(aliveConfig.alive);
            })
            .catch(() => console.log('error calling API'));
    }, []);


    return (
        <Wrapper>
            {alive ? <Typography>server up and running!</Typography> : <LinearProgress/>}
            <Button variant="contained" onClick={() => console.log('clicked')}>Click me</Button>
        </Wrapper>
    )
}