import {fireEvent, render,screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import CircleRating from "../rating/CircleRating";

// test('Renders correct base element',()=>{
//     const {getByRole} = render(<MemoryRouter> <CircleRating rating={3} /> </MemoryRouter>);
//     expect(screen.getByRole('div',{hidden: true})).toHaveClass('circleRating');
// })
describe("Test the CircleRating Component",()=>{
    test('Display received rating value',()=>{
            const {getByRole} = render(<MemoryRouter> <CircleRating rating={"3"} /> </MemoryRouter>);
            expect(screen.getByText('3')).toBeInTheDocument();
    })

})