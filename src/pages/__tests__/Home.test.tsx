import {fireEvent, render,screen,waitFor} from "@testing-library/react";
import Home from "../home/Home";
import {MemoryRouter} from 'react-router-dom';
import Banner from "../home/banner/Banner";
import useFetchData from "../../hooks/useFetchData";
import Trending from "../home/trending/Trending";


// describe("Test the Home Component",()=>{
//     test('renders the top bar correctly',()=>{
//         render(<MemoryRouter> <Home /> </MemoryRouter>);
//         expect(screen.getByText('Sign In')).toBeInTheDocument();
//     });

//     test("render the banner correctly",()=>{
//         render(<MemoryRouter> <Home /> </MemoryRouter>);
//         expect(screen.getByText("Welcome.")).toBeInTheDocument();
//         expect(screen.getByPlaceholderText("Type here to search your movies...")).toBeTruthy();
//     });

//     // test("Calls navigate to search page when searchQueryHandler  is called with enter key and length >0", async ()=>{
//     //     const mockNavigate = jest.fn();
//     //     render(<MemoryRouter> <Banner navigate={mockNavigate}/> </MemoryRouter>);
//     //     const input = screen.getByPlaceholderText('Type here to search your movies...');
//     //     fireEvent.change(input,{target:{value:'car'}});
//     //     fireEvent.keyUp(input,{key:'Enter',code:'Enter'});
//     //     await waitFor(()=>{
//     //         expect(mockNavigate).toHaveBeenCalledWith('/search/car');
//     //     }) ;
//     // });

//     test("doesn't call to navigate when searchQueryHandler is called with enter key and length is 2 or less", ()=>{
//             const mockNavigate = jest.fn();
//             render(<MemoryRouter> <Banner navigate={mockNavigate} query="wa"/> </MemoryRouter>);
//             const input = screen.getByPlaceholderText('Type here to search your movies...');
//             fireEvent.keyDown(input,{key:'Enter',code:'Enter'}); 
//             expect(mockNavigate).not.toHaveBeenCalledWith(); 
            
//             render(<MemoryRouter> <Banner navigate={mockNavigate} query=""/> </MemoryRouter>);
//             fireEvent.keyDown(input,{key:'Enter',code:'Enter'}); 
//             expect(mockNavigate).not.toHaveBeenCalledWith(); 
//     });

//     test("doesn't call nagivate when searchClick is called and query length is 2 or less",()=>{
//         const mockNavigate = jest.fn();
//         render(<MemoryRouter> <Banner navigate={mockNavigate} query="te"/> </MemoryRouter>);
//         const button = screen.getByText('Search');
//         fireEvent.click(button);
//         expect(mockNavigate).not.toHaveBeenCalledWith();

//         render(<MemoryRouter> <Banner navigate={mockNavigate} query=""/> </MemoryRouter>);
//         fireEvent.click(button);
//         expect(mockNavigate).not.toHaveBeenCalled();
//     });

//     //Test cases for Trending Component

//     test("renders the carousel with movie name when data is fetched successfully",()=>{
//         const mockData = [
//             {id:1, title :'American Fiction'},
//             {id:2, title :'Movie 2'},
//         ];
//         jest.mock('../../hooks/useFetchData',()=>({
//             useFetchData: jest.fn(()=>({data:mockData})),
//         }));
//         render(<MemoryRouter> <Trending /> </MemoryRouter>);
//         expect(screen.getByText('Trending')).toBeInTheDocument();
//         //expect(screen.getByTestId('carousel')).toBeInTheDocument();

//         mockData.forEach((movie)=>{
//             expect(screen.getByText(movie?.title)).toBeInTheDocument();
//         });
//     });

// })


describe("Test the Home Component",()=>{
    test("Renders the child Components",()=>{
        const { getByTestId } = render( <MemoryRouter> <Home /> </MemoryRouter> );
        expect(getByTestId('topBar')).toBeInTheDocument();
        expect(getByTestId('banner')).toBeInTheDocument();
        expect(getByTestId('trending')).toBeInTheDocument();
        expect(getByTestId('popular')).toBeInTheDocument();
        expect(getByTestId('topRated')).toBeInTheDocument();
        expect(getByTestId('upcoming')).toBeInTheDocument();
    });
    test('renders child components in the correct order', () => {
        const { getByTestId  } = render(<MemoryRouter> <Home /> </MemoryRouter>);
        const topBar = getByTestId('topBar');
        const banner = getByTestId('banner');
        const trending = getByTestId('trending');
        const popular = getByTestId('popular');
        const topRated = getByTestId('topRated');
        const upcoming = getByTestId('upcoming');
        const components = [topBar, banner, trending, popular, topRated, upcoming];
        for (let i = 0; i < components.length - 1; i++) {
            expect(components[i].compareDocumentPosition(components[i + 1])).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
        }
      });
    
})

