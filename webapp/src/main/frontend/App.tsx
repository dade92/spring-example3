import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";
import {restAliveConfigurationProvider} from "./logic/AliveConfigProvider";
import styled from "styled-components";

interface Props {
    isRunning: boolean
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const App: React.FC<Props> = ({isRunning}) => {
    const [alive, setAlive] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('Error');

    useEffect(() => {
        restAliveConfigurationProvider()
            .then((aliveConfig) => {
                setAlive(aliveConfig.alive);
                setMessage(aliveConfig.message)
            })
            .catch(() => console.log('error calling API'));
    }, []);


    return <Wrapper>
        {alive && <div><span>server alive!</span></div>}
        <Button variant="contained" onClick={() => console.log('clicked')}>Click me</Button>
        <span>{message}</span>
    </Wrapper>
}