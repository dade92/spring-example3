import React, {FC} from "react";
import {AppEvent} from "./logic/EventDataRetriever";
import {EventCard} from "./EventCard";
import {Typography} from "@mui/material";

interface Props {
    event: AppEvent;
    index: number;
    onClick: () => void;
}


export const Event: FC<Props> = ({event, index, onClick}) =>
    <EventCard index={index} onClick={onClick}>
        <Typography>
            {event.message}
        </Typography>
    </EventCard>