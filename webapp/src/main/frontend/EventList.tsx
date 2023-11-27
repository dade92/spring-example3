import React from "react";
import {AppEvent} from './logic/EventDataRetriever'

interface Props {
    events: AppEvent[];
}

export const EventList: React.FC<Props> = ({events}) => {
    return <>
        {
            events.map((e: AppEvent) => {
                return <span>{e.message}</span>
            })
        }
    </>
}