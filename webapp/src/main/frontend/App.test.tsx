import {render, screen, waitFor} from "@testing-library/react";
import {App} from "./App";

describe('App', () => {
    it('renders correctly when server is alive', () => {
        const aliveConfigProvider =
            jest.fn(() => Promise.resolve({alive: true, message: ""}));

        render(<App aliveConfigProvider={aliveConfigProvider}/>);

        waitFor(() => {
            expect(screen.getByTestId('button')).toBeVisible();
            expect(screen.getByTestId('up-and-running')).toBeVisible();
            expect(screen.queryByTestId('progress')).not.toBeVisible();
        });
    })

    it('renders correctly when server is not alive', () => {
        const aliveConfigProvider =
            jest.fn(() => Promise.resolve({alive: false, message: ""}));

        render(<App aliveConfigProvider={aliveConfigProvider}/>);

        waitFor(() => {
            expect(screen.getByTestId('button')).toBeVisible();
            expect(screen.queryByTestId('up-and-running')).not.toBeVisible();
            expect(screen.getByTestId('progress')).toBeVisible();
        });
    })
})