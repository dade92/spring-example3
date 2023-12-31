import {useState} from "react";
import {AppEvent, EventsRetriever} from "./logic/EventDataRetriever";

interface EventsFetcherStore {
    actions: {
        onSwitchClicked: (state: boolean) => void;
        onButtonClicked: () => void;
    },
    state: {
        checked: boolean;
        loading: boolean;
        events: AppEvent[];
    }
}

export const useEventsFetcherStore = (eventsRetriever: EventsRetriever, onError: () => void): EventsFetcherStore => {
    const [checked, setChecked] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [events, setEvents] = useState<AppEvent[]>([]);

    const onSwitchClicked = (state: boolean) => setChecked(state);

    const onButtonClicked = () => {
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
    };

    return {
        actions: {
            onSwitchClicked,
            onButtonClicked,
        },
        state: {
            checked,
            loading,
            events
        }
    }
}