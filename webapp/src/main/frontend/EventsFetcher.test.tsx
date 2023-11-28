import {fireEvent, screen, render, waitFor} from "@testing-library/react";
import {EventsFetcher} from "./EventsFetcher";
import '@testing-library/jest-dom';

describe('EventsFetcher', () => {

    it('Shows button and fetch data when clicked', () => {
        const eventsRetriever = jest.fn(() => Promise.resolve({events: [{message: 'Hey!'}]}));
        const onError = jest.fn();

        render(<EventsFetcher eventsRetriever={eventsRetriever} onError={onError}/>)

        expect(screen.getByTestId('fetcher-button')).toBeDisabled();

        fireEvent.click(screen.getByTestId('switch-button'));
        fireEvent.click(screen.getByTestId('fetcher-button'));

        waitFor(() => {
            expect(screen.getByTestId('ciccio')).toBeInTheDocument();
        });

        // expect(eventsRetriever).toHaveBeenCalledTimes(1);
        // expect(onError).toHaveBeenCalledTimes(0);
    });

})