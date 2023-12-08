import {fireEvent, render, screen} from "@testing-library/react";
import {Event} from './Event'
describe('Event', () => {

    it('calls on click callback when click on card', () => {
        const onclick = jest.fn();

        render(<Event event={{message: 'a message'}} index={0} onClick={onclick}/>);

        fireEvent.click(screen.getByTestId('event-0'));

        expect(onclick).toHaveBeenCalledTimes(1);
    })

})