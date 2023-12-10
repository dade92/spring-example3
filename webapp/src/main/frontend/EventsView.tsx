import React from "react";
import {AppEvent} from './logic/EventDataRetriever'
import {Loader} from "./Loader";
import {Typography} from "@mui/material";
import {EventCard} from "./EventCard";

interface Props {
    events: AppEvent[];
    isLoading: boolean;
}

export const EventsView: React.FC<Props> = ({events, isLoading}) => {
    return <>
        {isLoading ? <Loader/> :
            events.map((e: AppEvent, index) => {
                return <EventCard index={index} onClick={() => console.log('Event clicked' + index)}>
                    <Typography>
                        {e.message}
                    </Typography>
                </EventCard>
            })
        }
    </>
}