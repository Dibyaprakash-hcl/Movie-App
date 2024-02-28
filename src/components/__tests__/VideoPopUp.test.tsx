import {fireEvent, render,screen, waitFor, getByTestId} from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import VideoPopup from "../videoPopup/VideoPopup";

describe("Test the VideoPopUp Component",()=>{
    test("hides the popup when the close btn is clicked ",()=>{
        const setShow = jest.fn();
        const setVideoId = jest.fn();

        const {getByText} = render(<MemoryRouter> <VideoPopup show={true} setShow={setShow} videoId="some-video-id" setVideoId={setVideoId} /> </MemoryRouter>);
        const closeButton = getByText('Close');
        fireEvent.click(closeButton);
        expect(setShow).toHaveBeenCalledWith(false);
        expect(setVideoId).toHaveBeenCalledWith(null);
    });

    // test("plays the correct video based on the videoId prop",async()=>{
    //     const setShow= jest.fn();
    //     const setVideoId= jest.fn();

    //     const {getBytestId} = render(<MemoryRouter> <VideoPopup show={true} setShow={setShow} videoId="some-video-id" setVideoId={setVideoId} /> </MemoryRouter>);
    //     await waitFor(()=>expect(getByTestId('video-player')).toBeInTheDocument());
    //     const videoPlayer = getByTestId('video-player');
    //     expect(videoPlayer.src).toEqual("https://www.youtube.com/watch?v=some-video-id");
    // })
})