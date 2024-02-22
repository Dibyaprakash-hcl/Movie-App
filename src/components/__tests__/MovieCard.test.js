import {fireEvent, render,screen, waitFor,getByTextId} from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import MovieCard from "../movieCard/MovieCard";

describe("Test the MovieCard Component",()=>{
    
    test("renders correctly with the given props",()=>{
        const mockData={
            title:"The Shashank",
            media_type:"movie",
            release_date:"1994-10-14"
        };
        const wrapper= render(<MemoryRouter> <MovieCard data={mockData} /> </MemoryRouter>);
        expect(wrapper.getByText("The Shashank")).toBeInTheDocument();
        expect(wrapper.getByText('Oct 14, 1994')).toBeInTheDocument();
    });

    // test("navigates to movie details page on click",()=>{
    //     const mockNavigate = jest.fn();
    //     const mockData = {id:123};
    //     const wrapper = render(<MemoryRouter> <MovieCard data={mockData} navigate={mockNavigate}/> </MemoryRouter>);
    //     wrapper.getByRole('button').click();
    //     expect(mockNavigate).toHaveBeenCalledWith('/movie/123');
    // })
})