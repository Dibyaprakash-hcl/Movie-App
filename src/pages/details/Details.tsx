import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import DetailsBanner from './DetailsBanner';
import Cast from './Cast';
import TopBar from '../../components/TopBar';

const Details: FC = () => {
  const { mediaType,id } = useParams();
  const { data } = useFetchData(`/${mediaType}/${id}/credits`);
  const { data: video } = useFetchData(
    `/${mediaType}/${id}/videos`
  );
  console.log(video?.results?.[0], 'dq');
  return (
    <>
      <DetailsBanner video={video?.results?.[0]} crew={data?.crew} />
      <Cast data={data?.cast} />
    </>
  );
};
export default Details;