import React, {FC} from "react";
import {Button, Switch} from "@mui/material";
import {Loader} from "./Loader";
import {EventList} from "./EventList";
import {EventsRetriever} from "./logic/EventDataRetriever";
import {useEventsFetcherStore} from "./EventsFetcherStore";

interface Props {
    eventsRetriever: EventsRetriever;
    onError: () => void;
}

export const EventsFetcher: FC<Props> = ({eventsRetriever, onError}) => {
    const {state, actions} = useEventsFetcherStore(eventsRetriever, onError);

    return (
        <>
            <Button data-testid={'fetcher-button'}
                    variant="contained"
                    onClick={actions.onButtonClicked}
                    disabled={!state.checked}>Load events</Button>
            <Switch checked={state.checked}
                    onChange={() => actions.onSwitchClicked(!state.checked)}/>
            <EventList events={state.events} isLoading={state.loading}/>
        </>
    )
}