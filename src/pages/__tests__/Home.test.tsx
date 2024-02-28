import {fireEvent, render,screen,waitFor} from "@testing-library/react";
import Home from "../home/Home";
import {MemoryRouter} from 'react-router-dom';
import Banner from "../home/banner/Banner";
import useFetchData from "../../hooks/useFetchData";
import Trending from "../home/trending/Trending";


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

