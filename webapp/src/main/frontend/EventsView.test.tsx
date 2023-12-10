import {render, screen} from "@testing-library/react";
import {EventsView} from "./EventsView";
import '@testing-library/jest-dom';

describe('Events view', () => {
    const events = [{message: ''}, {message: ''}];

    it('shows loader if it is loading', () => {

        render(<EventsView events={events} isLoading={true}/>)

        expect(screen.getByTestId('loader')).toBeVisible();
        expect(screen.queryByTestId('event-0')).toBeNull();
    })

    it('shows the event list when is not loading', () => {

        render(<EventsView events={events} isLoading={false}/>)

        expect(screen.queryByTestId('loader')).toBeNull();
        expect(screen.getByTestId('event-0')).toBeVisible();
    })

})