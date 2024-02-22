import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetchData from '../../../hooks/useFetchData';
import Carousel from '../../../components/carousel/Carousel';

const Trending: React.FC = () => {
  const { data } = useFetchData(`/trending/movie/day`);
  console.log(data?.results,"za")
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
      </ContentWrapper>
      <Carousel data={data?.results} />
    </div>
  );
};
export default Trending;