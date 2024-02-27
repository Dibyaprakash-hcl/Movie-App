import {fireEvent, render,screen,waitFor,act } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import TopRated from "../home/topRated/TopRated";
import userEvent from '@testing-library/user-event'; 

describe("Test TopRated Component",()=>{

    it('renders without crashing', () => {
        render(<MemoryRouter> <TopRated /> </MemoryRouter>);
        expect(screen.getByTestId('topRated')).toBeInTheDocument();
    });

    it('displays the "Trending" title', () => {
        render(<MemoryRouter> <TopRated /> </MemoryRouter>);
        expect(screen.getByText('Top Rated')).toBeInTheDocument();
    });

    test('renders Carousel component with correct data', () => {
        jest.mock('../../hooks/useFetchData', () => ({
            __esModule: true,
            default: jest.fn(() => ({ data: { results: [{ id:1, title:'Movie 1' }] } })),
        }));
        render(<MemoryRouter> <TopRated /> </MemoryRouter>);
        const carouselElement = screen.getByTestId('carousel');
        expect(carouselElement).toBeInTheDocument();
    });
})