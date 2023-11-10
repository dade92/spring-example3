import React from "react";

interface Props {
    isRunning: boolean
}

export const App: React.FC<Props> = ({isRunning}) => {
    return isRunning ? <span>is running!</span> : <span>is not running</span>
}