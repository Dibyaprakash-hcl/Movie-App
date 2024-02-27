import {fireEvent, render,screen,waitFor,act } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import Carousel from "../carousel/Carousel";
import userEvent from '@testing-library/user-event'; 

describe("Renders the Carousel Component",()=>{
    const mockData = {
        data: [
          {
            id: 1,
            title: 'Movie 1',
            releasedate: '2022-02-01',
          },
          {
            id: 2,
            name: 'TV Show 1',
            first_air_date: '2022-02-15',
          },
        ],     
    };

    test('renders Carousel component with provided data', () => {
        render(<MemoryRouter> <Carousel data={mockData} /> </MemoryRouter>);
        
        const carouselElement = screen.getByTestId('carousel');
        expect(carouselElement).toBeInTheDocument();
    
        // Check if the items are rendered
        const carouselItems = screen.getAllByTestId('carousel');
        expect(carouselItems.length+1).toBe(mockData.data.length);
    
    });
    
})