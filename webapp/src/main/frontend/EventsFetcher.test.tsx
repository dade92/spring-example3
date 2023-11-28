import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {EventsFetcher} from "./EventsFetcher";
import '@testing-library/jest-dom';

describe('EventsFetcher', () => {

    it('Shows button and fetch data when clicked', async () => {
        const eventsRetriever = jest.fn(() => Promise.resolve({events: [{message: 'Hey!'}]}));
        const onError = jest.fn();

        render(<EventsFetcher eventsRetriever={eventsRetriever} onError={onError}/>)

        expect(screen.getByTestId('fetcher-button')).toBeDisabled();

        fireEvent.click(screen.getByRole('checkbox'));

        await waitFor(() => {
            expect(screen.getByTestId('fetcher-button')).toBeEnabled();
        })

        fireEvent.click(screen.getByTestId('fetcher-button'));

        await waitFor(() => {
            expect(screen.getByTestId('event-0')).toBeInTheDocument();
        });

        expect(eventsRetriever).toHaveBeenCalledTimes(1);
        expect(onError).toHaveBeenCalledTimes(0);
    });

    it('calls onError callback if rest call fails', async () => {
        const eventsRetriever = jest.fn(() => Promise.reject());
        const onError = jest.fn();

        render(<EventsFetcher eventsRetriever={eventsRetriever} onError={onError}/>)

        expect(screen.getByTestId('fetcher-button')).toBeDisabled();

        fireEvent.click(screen.getByRole('checkbox'));

        await waitFor(() => {
            expect(screen.getByTestId('fetcher-button')).toBeEnabled();
        })

        fireEvent.click(screen.getByTestId('fetcher-button'));

        await waitFor(() => {
            expect(eventsRetriever).toHaveBeenCalledTimes(1);
            expect(onError).toHaveBeenCalledTimes(1);
        })
    });

})