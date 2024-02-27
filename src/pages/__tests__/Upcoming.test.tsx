import {fireEvent, render,screen,waitFor,act } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import Upcoming from "../home/upcoming/Upcoming";
import userEvent from '@testing-library/user-event'; 

describe("Test the Upcoming Component",()=>{

    it('renders without crashing', () => {
        render(<MemoryRouter> <Upcoming /> </MemoryRouter>);
        expect(screen.getByTestId('upcoming')).toBeInTheDocument();
    });

    it('displays the "Trending" title', () => {
        render(<MemoryRouter> <Upcoming /> </MemoryRouter>);
        expect(screen.getByText('Upcoming')).toBeInTheDocument();
    });

    test('renders Carousel component with correct data', () => {
        jest.mock('../../hooks/useFetchData', () => ({
            __esModule: true,
            default: jest.fn(() => ({ data: { results: [{ id:1, title:'Movie 1' }] } })),
          }));
        render(<MemoryRouter> <Upcoming /> </MemoryRouter>);
        const carouselElement = screen.getByTestId('carousel');
        expect(carouselElement).toBeInTheDocument();
    });
})