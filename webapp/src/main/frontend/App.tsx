import React, {useEffect, useState} from "react";

interface Props {
    isRunning: boolean
}

let host = '';

if(process.env.NODE_ENV === 'development') {
    host = "http://localhost:8080";
    console.log('Development mode active');
} else if(process.env.NODE_ENV === 'production') {
    host = "http://Davides-MBP:8080";
}

export const App: React.FC<Props> = ({isRunning}) => {
    const [alive, setAlive] = useState<boolean>(false);

    useEffect(() => {
        fetch(`${host}/api/alive`)
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