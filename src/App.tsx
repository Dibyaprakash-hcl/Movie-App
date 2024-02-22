import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { fetchDataFromApi } from './service/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfuguration } from './store/homeSlice';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Trending from './pages/trending/Trending';
import PopularPage from './pages/popular/PopularPage';
import TopRatedPage from './pages/topRated/TopRatedPage';
import UpcomingPage from './pages/upcoming/UpcomingPage';
function App(): JSX.Element {
  const dispatch = useDispatch();
  const { url } = useSelector((state: any) => state.home);
  useEffect(() => {
    fetchApiConfig();
  }, []);
  const fetchApiConfig = (): void => {
    fetchDataFromApi("/configuration").then((res: any) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original"
      }
      dispatch(getApiConfuguration(url));
    })
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/toprated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;