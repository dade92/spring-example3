import React from "react";
import {AppEvent} from './logic/EventDataRetriever'
import {Loader} from "./Loader";
import {List, ListItem, ListItemText} from "@mui/material";

interface Props {
    events: AppEvent[];
    isLoading: boolean;
}

export const EventList: React.FC<Props> = ({events, isLoading}) => {
    return <>
        {isLoading && <Loader/>}
        {
            events.map((e: AppEvent, index) => {
                return <ListItem data-testid={`event-${index}`}>
                    <ListItemText>
                        {e.message}
                    </ListItemText>
                </ListItem>
            })
        }
    </>
}