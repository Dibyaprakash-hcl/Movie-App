import {fireEvent, render,screen,waitFor,act } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import Banner from "../home/banner/Banner";
  
  // Mocking useNavigate
  const mockNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  }));

describe("Test the Banner Component",()=>{
    test("renders without crashing the component",()=>{
        render(<MemoryRouter> <Banner /> </MemoryRouter>);
    });

    test("Renders the backdrop image",()=>{
        const {getByTestId } = render(<MemoryRouter> <Banner /> </MemoryRouter>);
        const backdropImage = getByTestId('backdropimage');
        expect(backdropImage).toBeInTheDocument();
    });

    it('navigates to search page on enter key press with a valid query', async () => {
        const { getByPlaceholderText } = render(<MemoryRouter> <Banner/> </MemoryRouter>);
        const searchInput = getByPlaceholderText('Type here to search your movies...');
        fireEvent.change(searchInput, { target: { value: 'Inception' } });
        await act(async () => {
            fireEvent.keyUp(searchInput, { key: 'Enter' });
        });
      
        // Assert that navigation occurred
        expect(mockNavigate).toHaveBeenCalledWith('/search/Inception');
    });

    it('does not navigate on enter key press with an empty query', async () => {
        const { getByPlaceholderText } = render(<MemoryRouter> <Banner/> </MemoryRouter>);
    
        const searchInput = getByPlaceholderText('Type here to search your movies...');
        fireEvent.keyUp(searchInput, { key: 'Enter', code: 'Enter' });
    
        await waitFor(() => {
          expect(window.location.pathname).toBe('/');
        });
    });

    it('navigates to search page on search button click with a valid query', async () => {
        const { getByPlaceholderText, getByText } = render(<MemoryRouter> <Banner/> </MemoryRouter>);
    
        const searchInput = getByPlaceholderText('Type here to search your movies...');
        const searchButton = getByText('Search');
    
        fireEvent.change(searchInput, { target: { value: 'Inception' } });
        await act(async () => {
            fireEvent.click(searchButton);
        });
        expect(mockNavigate).toHaveBeenCalledWith('/search/Inception');
        
    });

    it('does not navigate on search button click with an empty query', async () => {
        const { getByText } = render(<MemoryRouter> <Banner/> </MemoryRouter>);
    
        const searchButton = getByText('Search');
    
        await act(async () => {
            fireEvent.click(searchButton);
        });
        expect(window.location.pathname).toBe('/');
       
    });
})
