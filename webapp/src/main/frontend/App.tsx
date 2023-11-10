import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";
import {staticRestClient} from "./logic/RestClient";

interface Props {
    isRunning: boolean
}

export const App: React.FC<Props> = ({isRunning}) => {
    const [alive, setAlive] = useState<boolean>(false);

    useEffect(() => {
        staticRestClient.get('/alive')
            .then(() => {
                setAlive(true);
            })
            .catch(() => console.log('error calling API'));
    }, []);


    return <>
        {isRunning ? <span>is running!</span> : <span>is not running</span>}
        {alive && <div><span>and also alive!</span></div>}
        <Button variant="contained" onClick={() => console.log('clicked')}>Click me</Button>
    </>
}