import {fireEvent, render,screen,waitFor,act } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import Popular from "../home/popular/Popular";
import userEvent from '@testing-library/user-event'; 

describe("Renders the Popular Component",()=>{
    test('renders the Popular component with title', async () => {
        const mockData = { results: [{ id: 1, title: 'Movie 1' }] };
        jest.mock('../../hooks/useFetchData', () => ({
          useFetchData: () => ({ data: mockData, loading: false }),
        }));
      
        render(<MemoryRouter> <Popular /> </MemoryRouter>);
      
        await waitFor(() => {
          expect(screen.getByText("Popular")).toBeInTheDocument();
        });
    });

    test("renders Carousel component with data",async()=>{
      const mockData = {results: [{id:1, title:'Movie 1'}]};
      jest.mock('../../hooks/useFetchData',()=>({
        useFetchData:()=>({data: mockData, loading:false}),
      }));

      const {getByTestId}= render(<MemoryRouter> <Popular /> </MemoryRouter>);

      await waitFor(() => {
        expect(screen.getByTestId("carousel")).toBeInTheDocument();
      });      
    })
})