import React, {FC} from "react";
import {Button, FormControlLabel, Switch} from "@mui/material";
import {EventsView} from "./EventsView";
import {EventsRetriever} from "./logic/EventDataRetriever";
import {useEventsFetcherStore} from "./EventsFetcherStore";
import styled from "styled-components";

interface Props {
    eventsRetriever: EventsRetriever;
    onError: () => void;
}

const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;

`

export const EventsFetcher: FC<Props> = ({eventsRetriever, onError}) => {
    const {state, actions} = useEventsFetcherStore(eventsRetriever, onError);

    return (
        <>
            <FormControlLabel control={<Switch data-testid={'switch-button'}
                                               checked={state.checked}
                                               onChange={() => actions.onSwitchClicked(!state.checked)}/>}
                              label="Enable fetch"/>
            <Button data-testid={'fetcher-button'}
                    variant="contained"
                    onClick={actions.onButtonClicked}
                    disabled={!state.checked}>Load events</Button>
            <EventsView events={state.events} isLoading={state.loading}/>
        </>
    )
}