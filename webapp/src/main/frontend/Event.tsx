import React, {FC} from "react";
import {AppEvent} from "./logic/EventDataRetriever";
import {EventCard} from "./EventCard";

interface Props {
    event: AppEvent;
    index: number;
}


export const Event: FC<Props> = ({event, index}) => {
    return <EventCard data-testid={`event-${index}`} onClick={() => {console.log('event clicked: ' + index)}}>
        {event.message}
    </EventCard>
}