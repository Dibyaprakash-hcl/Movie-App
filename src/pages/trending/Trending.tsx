import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import noResults from "../../constants/no-results.png";
import { fetchDataFromApi } from "../../service/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import TopBar from "../../components/TopBar";
interface MovieData {
    results?: any;
    total_pages?:number;
  }
  
  const Trending: React.FC = () => {
    const [data, setData] = useState<MovieData | null>(null);
    const [pageNum, setPageNum] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const { query } = useParams<{ query: string }>();
  
    const fetchInitialData = async () => {
      setLoading(true);
      const res = await fetchDataFromApi(`/trending/movie/week`);
      setData(res);
      setPageNum(prev => prev + 1);
      setLoading(false);
    };
  
    const fetchNextPageData = async () => {
      const res = await fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`);
      if (data?.results) {
        setData({
          ...data,
          results: [...data.results, ...res.results]
        });
      } else {
        setData(res);
      }
      setPageNum(prev => prev + 1);
    };
  
    useEffect(() => {
      fetchInitialData();
    }, [query]);
  return (
    <>
      <TopBar />
      <div className="searchResultsPage">
        {!loading && (
          <ContentWrapper>
          
            {data?.results?.length > 0 ? (
              <>
                <div className="pageTitle">Trending Movies</div>
                <InfiniteScroll
                    className="content"
                    dataLength={data?.results.length || []}
                    next={fetchNextPageData} hasMore={false} loader={undefined}               
                >
                  {data?.results?.map((item: any, index: number) => {
                    console.log(item, "donu");
                    return (
                      <MovieCard
                        key={index}
                        data={item}
                        mediaType={`movie`}
                      />
                    );
                  })}
                </InfiniteScroll>
              </>
            ) : (
              <span className="resultNotFound">
                Sorry, Results Not Found !!!!
              </span>
            )}
          </ContentWrapper>
        )}
      </div>
    </>
  );
};
export default Trending;