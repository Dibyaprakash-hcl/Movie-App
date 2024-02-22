import React, { FC } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetchData from '../../../hooks/useFetchData';
import Carousel from '../../../components/carousel/Carousel';
interface TopRatedProps {}
const TopRated: FC<TopRatedProps> = () => {
  const { data} = useFetchData(`/movie/top_rated`);
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
      </ContentWrapper>
      <Carousel data={data?.results} />
    </div>
  );
};
export default TopRated;