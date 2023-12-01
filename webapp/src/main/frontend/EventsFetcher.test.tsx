import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {EventsFetcher} from "./EventsFetcher";
import '@testing-library/jest-dom';

describe('EventsFetcher', () => {
    const onError = jest.fn();

    it('Shows button and fetch data when clicked', async () => {
        const eventsRetriever = jest.fn(
            () => Promise.resolve({events: [{message: 'Hey!'}]})
        );

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

    it('calls onError callback if fetcher call fails', async () => {
        const eventsRetriever = jest.fn(() => Promise.reject());

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