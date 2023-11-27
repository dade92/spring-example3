import React, {FC, useState} from "react";
import {Button, Switch} from "@mui/material";
import {Loader} from "./Loader";
import {EventList} from "./EventList";
import {AppEvent, EventsRetriever} from "./logic/EventDataRetriever";
import {useEventsFetcherStore} from "./EventsFetcherStore";

interface Props {
    eventsRetriever: EventsRetriever;
    onError: () => void;
}

export const EventFetcher: FC<Props> = ({eventsRetriever, onError}) => {
    const eventsFetcherStore = useEventsFetcherStore(eventsRetriever, onError);

    return (
        <>
            <Button data-testid={'fetcher-button'}
                    variant="contained"
                    onClick={eventsFetcherStore.actions.onButtonClicked}
                    disabled={!eventsFetcherStore.state.checked}>Load events</Button>
            <Switch checked={eventsFetcherStore.state.checked} onChange={() => eventsFetcherStore.actions.onSwitchClicked(!eventsFetcherStore.state.checked)}/>
            {eventsFetcherStore.state.loading && <Loader/>}
            {eventsFetcherStore.state.events.length > 0 && <EventList events={eventsFetcherStore.state.events}/>}
        </>
    )
}