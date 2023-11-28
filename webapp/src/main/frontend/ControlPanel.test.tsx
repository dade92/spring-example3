import {render, screen, waitFor} from "@testing-library/react";
import {ControlPanel} from "./ControlPanel";
import '@testing-library/jest-dom';

describe('ControlPanel', () => {
    it('renders correctly when server is alive', async () => {
        const aliveConfigProvider =
            jest.fn(() => Promise.resolve({alive: true, message: ""}));

        render(<ControlPanel aliveConfigProvider={aliveConfigProvider}
                             eventsRetriever={jest.fn(() => Promise.resolve({events: []}))} onError={jest.fn()}/>);

        await waitFor(() => {
            expect(screen.getByTestId('fetcher-button')).toBeVisible();
            expect(screen.getByTestId('up-and-running')).toBeVisible();
            expect(screen.queryByTestId('progress')).toBeNull();
        });

        expect(aliveConfigProvider).toHaveBeenCalledTimes(1);
    })

    it('renders correctly when server is not alive', async () => {
        const aliveConfigProvider =
            jest.fn(() => Promise.resolve({alive: false, message: ""}));

        render(<ControlPanel aliveConfigProvider={aliveConfigProvider} eventsRetriever={jest.fn(() => Promise.reject())}
                             onError={jest.fn()}/>);

        await waitFor(() => {
            expect(screen.getByTestId('fetcher-button')).toBeVisible();
            expect(screen.queryByTestId('up-and-running')).toBeNull();
            expect(screen.getByTestId('progress')).toBeVisible();
        });

        expect(aliveConfigProvider).toHaveBeenCalledTimes(1);
    })
})