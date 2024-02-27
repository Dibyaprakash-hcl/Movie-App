import {fireEvent, render,screen,waitFor,act } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import Trending from "../home/trending/Trending";
import userEvent from '@testing-library/user-event'; 

describe("Renders the Trending Component",()=>{
    it('renders without crashing', () => {
        render(<MemoryRouter> <Trending /> </MemoryRouter>);
        expect(screen.getByTestId('trending')).toBeInTheDocument();
    });

    it('displays the "Trending" title', () => {
        render(<MemoryRouter> <Trending /> </MemoryRouter>);
        expect(screen.getByText('Trending')).toBeInTheDocument();
    });

    // it('displays the data in the Carousel component', async () => {
    //     const testData = { data: [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }] };
    //     jest.mock('../../hooks/useFetchData', () => ({
    //       __esModule: true,
    //       default: jest.fn(() => ({ data: testData })),
    //     }));
    
    //     render(<MemoryRouter> <Trending /> </MemoryRouter>);
        
    //     await waitFor(() => {
    //         const carouselElement = screen.queryByTestId('carousel');
    //         expect(carouselElement).toBeInTheDocument();

    //         if (testData.data.length > 0) {
    //             expect(screen.getAllByTestId('name')).toBeInTheDocument();
    //         }
    //     });
    // });

    test("renders Carousel component with data",async()=>{
        const mockData = {results: [{id:1, title:'Movie 1'}]};
        jest.mock('../../hooks/useFetchData',()=>({
          useFetchData:()=>({data: mockData, loading:false}),
        }));
  
        const {getByTestId}= render(<MemoryRouter> <Trending /> </MemoryRouter>);
  
        await waitFor(() => {
          expect(screen.getByTestId("carousel")).toBeInTheDocument();
        });      
    });

    it('handles the case when data is not available', async () => {
        jest.mock('../../hooks/useFetchData', () => ({
          __esModule: true,
          default: jest.fn(() => ({ data: null })),
        }));
    
        render(<MemoryRouter> <Trending /> </MemoryRouter>);
    
        await waitFor(() => {
          expect(screen.queryByText('Movie 1')).not.toBeInTheDocument();
          expect(screen.queryByText('Movie 2')).not.toBeInTheDocument();
          expect(screen.getByText('Trending')).toBeInTheDocument();
        });
    });
})