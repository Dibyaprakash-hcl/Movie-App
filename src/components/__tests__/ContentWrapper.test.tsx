import {fireEvent, render,screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import ContentWrapper from "../contentWrapper/ContentWrapper";

describe("Test the ContentWrapper Component",()=>{
    test("renders children",()=>{
        const child=<p>Hello</p>;
        const wrapper= render(<MemoryRouter> <ContentWrapper>{child}</ContentWrapper> </MemoryRouter>);
        expect(wrapper.getByText("Hello")).toBeInTheDocument();
    });
    
    // test("passes down props to children",async()=>{
    //     const mockChild = jest.fn();
    //     const props = {someProp:"value"};
    //     const wrapper= render(<MemoryRouter> <ContentWrapper {...props}><mockChild /></ContentWrapper> </MemoryRouter>);
    //     await expect(mockChild).toHaveBeenCalledWith(props);
    // })

})