import React from "react";
import {AppEvent} from './logic/EventDataRetriever'
import {Loader} from "./Loader";

interface Props {
    events: AppEvent[];
    isLoading: boolean;
}

export const EventList: React.FC<Props> = ({events, isLoading}) => {
    return <>
        {isLoading && <Loader/>}
        {
            events.map((e: AppEvent, index) => {
                return <span data-testid={`event-${index}`}>{e.message}</span>
            })
        }
    </>
}