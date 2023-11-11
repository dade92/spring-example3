import {render, screen} from "@testing-library/react";
import {App} from "./App";
import '@testing-library/jest-dom';

describe('App', () => {
    it('renders correctly', () => {
        const aliveConfigProvider =
            jest.fn(() => Promise.resolve({alive: true, message: ""}));

        render(<App aliveConfigProvider={aliveConfigProvider}/>);

        expect(screen.getByTestId('button')).toBeVisible();
    })
})