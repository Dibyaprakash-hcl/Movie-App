import {fireEvent, render,screen,waitFor,act } from "@testing-library/react";
import {MemoryRouter,Route,Routes} from 'react-router-dom';
import TopRatedPage from "../topRated/TopRatedPage";
import userEvent from '@testing-library/user-event';
import { fetchDataFromApi}  from "../../service/api";
import * as apiModule from "../../service/api";

jest.mock("../../service/api");

describe("Test the TopRatedPage Component",()=>{
    it("renders TopBar component", () => {
        render(<MemoryRouter> <TopRatedPage /> </MemoryRouter>);
        expect(screen.getByTestId("topBar")).toBeInTheDocument();
    });

    it("renders results when data is available", async () => {
        const mockData = {
          results: [{ id: 1, title: "Movie 1" }, { id: 2, title: "Movie 2" }],
        };
        jest.spyOn(apiModule, "fetchDataFromApi").mockResolvedValueOnce(mockData);
    
        const {getByText} = render(<MemoryRouter> <TopRatedPage /> </MemoryRouter>);
        await waitFor(() => expect(fetchDataFromApi).toHaveBeenCalledTimes(1));
        await waitFor(() => {
            expect(screen.getByText(/Top-Rated Movies/)).toBeInTheDocument();
        });
        
        await waitFor(() => {
            expect(screen.getByTestId("movie-card-1")).toBeInTheDocument();
        });
    });

    it("renders 'Results Not Found' message when no data is available", async () => {
        jest.spyOn(apiModule, "fetchDataFromApi").mockResolvedValueOnce({ results: [] });
    
        render(<MemoryRouter> <TopRatedPage /> </MemoryRouter>);
        await waitFor(() => expect(apiModule.fetchDataFromApi).toHaveBeenCalledTimes(1));
        await waitFor(() => {
            expect(screen.getByText("Sorry, Results Not Found !!!!")).toBeInTheDocument();
        });
        
    });
})