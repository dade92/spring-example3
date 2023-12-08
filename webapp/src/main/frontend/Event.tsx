import React, {FC} from "react";
import {AppEvent} from "./logic/EventDataRetriever";
import {EventCard} from "./EventCard";
import {Typography} from "@mui/material";

interface Props {
    event: AppEvent;
    index: number;
}


export const Event: FC<Props> = ({event, index}) =>
    <EventCard index={index} onClick={() => {
        console.log('event clicked: ' + index)
    }}>
        <Typography>
            {event.message}
        </Typography>
    </EventCard>