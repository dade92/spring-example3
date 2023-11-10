import React, {useEffect, useState} from "react";

interface Props {
    isRunning: boolean
}

export const App: React.FC<Props> = ({isRunning}) => {
    const [alive, setAlive] = useState<boolean>(false);

    useEffect(() => {
        fetch('/api/alive')
            .then((response) => {
                if(response.status == 200) {
                    setAlive(true);
                }
            })
            .catch(() => console.log('error calling API'));
    }, []);


    return <>
        {isRunning ? <span>is running!</span> : <span>is not running</span>}
        {alive && <div><span>and also alive!</span></div>}
    </>
}