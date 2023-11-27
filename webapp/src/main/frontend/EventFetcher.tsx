import React, {FC, useState} from "react";
import {Button, Switch} from "@mui/material";
import {Loader} from "./Loader";
import {EventList} from "./EventList";
import {AppEvent, EventsRetriever} from "./logic/EventDataRetriever";

interface Props {
    eventsRetriever: EventsRetriever;
    onError: () => void;
}

export const EventFetcher: FC<Props> = ({eventsRetriever, onError}) => {
    const [checked, setChecked] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [events, setEvents] = useState<AppEvent[]>([]);

    const retrieveEvents = () => {
        setLoading(true);
        eventsRetriever()
            .then((events) => {
                setEvents(events.events);
                setLoading(false);
            })
            .catch(() => {
                onError();
                setLoading(false);
            })
    }

    return (
        <>
            <Button data-testid={'fetcher-button'}
                    variant="contained"
                    onClick={retrieveEvents}
                    disabled={!checked}>Load events</Button>
            <Switch checked={checked} onChange={() => setChecked(!checked)}/>
            {loading && <Loader/>}
            {events.length > 0 && <EventList events={events}/>}
        </>
    )
}