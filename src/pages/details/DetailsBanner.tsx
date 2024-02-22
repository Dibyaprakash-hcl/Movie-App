import React, { useState } from 'react'
import "./detailsBanner.scss"
import { useParams } from "react-router-dom";
import useFetchData from '../../hooks/useFetchData';
import Img from '../../components/lazyLoadImage/Img';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import dayjs from "dayjs";
import CircleRating from '../../components/rating/CircleRating';
import { PlayIcon } from './Playbtn';
import VideoPopup from '../../components/videoPopup/VideoPopup';
  
interface DetailsBannerProps {
    video?: any;
    crew?: any;
}

const DetailsBanner: React.FC<DetailsBannerProps> = ({video,crew}) => {

    console.log(video?.key, "dddd");

    const [show, setShow] = useState<boolean>(false);
    const [videoId, setVideoId] = useState<string | null>(null);
    const { mediaType,id } = useParams();
    const { data } = useFetchData(`/${mediaType}/${id}`);
    const director = crew?.filter((f:any) => f.job === "Director");
    const writer = crew?.filter((f:any) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer");
  
    const toHoursAndMinutes = (totalMinutes: number): string => {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return `${hours}h ${minutes}m`;
    };
    
  return (
    <div className='detailsBanner'> 
        <div className='backdrop-img'>
          <Img src="https://th.bing.com/th?id=OIP.zKBC4GRtHTHB17fFZkKEVgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" />
        </div>
        <div className="opacity-layer"></div>
        <ContentWrapper>
          <div className="content">
            <div className="left">
              <Img className="posterImg" src="data:image/jpeg;base64,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" />

            </div>
            <div className="right">
              <div className="title">
                {`${data?.title || data?.name} (${dayjs(data?.release_date).format("YYYY")})`}
              </div>
              <div className="subtitle">
                {data?.tagline}
              </div>
              <div className="row">
                <CircleRating rating={data?.vote_average.toFixed(1)}/>

                <div className="playbtn" onClick={()=>{
                  setShow(true)
                  setVideoId(video?.key)
                }}>
                  <PlayIcon />
                  <span className='text'>Watch Trailer</span>
                </div>
              </div>

              <div className="overview">
                <div className="heading">Overview</div>
                <div className="description">
                  {data?.overview}
                </div>
              </div>

              <div className="info">
                {data?.status && ( <div className='infoItme'>
                  <span className="text bold">Status:{" "}</span>
                  <span className="text">{data?.status}</span>
                </div>)}

                {data?.release_date && ( <div className='infoItme'>
                  <span className="text bold">Release Date:{" "}</span>
                  <span className="text">{dayjs(data?.release_date).format("MMM D, YYYY")}</span>
                </div>)}

                {data?.runtime && ( <div className='infoItme'>
                  <span className="text bold">Duration:{" "}</span>
                  <span className="text">{toHoursAndMinutes(data?.runtime)}</span>
                </div>)}
              </div>

              {director?.length > 0 && (
                <div className="info">
                  <span className="text bold">
                    Director:
                  </span>
                  <span className="text">
                    {director?.map((d:any,i:any)=>(
                      <span key={i}>
                        {d.name}
                      </span>
                    ))}
                  </span>
                </div>
              )}

              {writer?.length > 0 && (
                <div className="info">
                  <span className="text bold">
                    Writer:
                  </span>
                  <span className="text">
                    {writer?.map((d:any,i:any)=>(
                      <span key={i}>
                        {d.name}
                      </span>
                    ))}
                  </span>
                </div>
              )}

            </div>
          </div>

          <VideoPopup
            show={show}
            setShow={setShow}
            videoId={videoId}
            setVideoId={setVideoId}
          />

        </ContentWrapper>
      
    </div>
  )
}

export default DetailsBanner
