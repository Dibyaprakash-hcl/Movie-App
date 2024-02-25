import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetchData from '../../../hooks/useFetchData';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
interface BannerProps {}
const Banner: FC<BannerProps> = () => {
  const [background, setBackground] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  
  //const {url} = useSelector((state)=>state.home);
  //const {data,loading} = useFetchData("/movie/upcoming");
  // useEffect(()=>{
  //   const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
  //   setBackground(bg);
  // },[data])
  // console.log(background,"demo")
  
  const searchQueryHandler = (event: React.KeyboardEvent<HTMLInputElement>) =>{
    if (event.key === "Enter" && query.length > 2) {
      navigate(`/search/${query}`);
    }
  }
  const searchClick = () => {
    if(query.length > 2){
      navigate(`/search/${query}`);
    }  
  }

  return (
    <div className='heroBanner' data-testid="banner">
      <div className="backdrop-img" data-testid="backdropimage">
        {/* <Img src={background} /> */}
        <Img src="https://th.bing.com/th?id=OIP.zKBC4GRtHTHB17fFZkKEVgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" />
      </div>
      <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        All your movies are here.
                        Explore now & Enjoy !!
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Type here to search your movies..."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button onClick={searchClick}>Search</button>
                    </div>
                </div>
            </ContentWrapper>     
    </div>
  )
}
export default Banner;