import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetchData from '../../../hooks/useFetchData';
import Carousel from '../../../components/carousel/Carousel';

const Popular: React.FC = () => {
  const { data} = useFetchData('/movie/popular');
  return (
    <div className="carouselSection" data-testid="popular">
      <ContentWrapper>
        <span className="carouselTitle">Popular</span>
      </ContentWrapper>
      <Carousel data={data?.results} />
    </div>
  );
};
export default Popular;