import React from "react";
import {AppEvent} from './logic/EventDataRetriever'
import {Loader} from "./Loader";
import {Event} from "./Event";

interface Props {
    events: AppEvent[];
    isLoading: boolean;
}

export const EventList: React.FC<Props> = ({events, isLoading}) => {
    return <>
        {isLoading && <Loader/>}
        {
            events.map((e: AppEvent, index) => {
                return <Event event={e} index={index}/>
            })
        }
    </>
}