import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetchData from '../../../hooks/useFetchData';
import Carousel from '../../../components/carousel/Carousel';

const Upcoming : React.FC= () => {

    const {data} = useFetchData(`/movie/upcoming`);

  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Upcoming</span>
        </ContentWrapper>
        <Carousel data={data?.results} />
      
    </div>
  )
}

export default Upcoming
