import React, { useState, useEffect } from 'react';
import { fetchDataFromApi } from '../service/api';
interface FetchDataResponse {
  data: any;
//   loading: boolean | string;
  error: string | null;
}
const useFetchData = (url: string): FetchDataResponse => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean | string>();
  const [error, setError] = useState<string | null>(null);
  console.log(typeof(data),"ap")
  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setError(null);
    fetchDataFromApi(url)
      .then((res: any) => {
        setLoading(false);
        setData(res);
      })
      .catch((err: any) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);
  return { data, error };
};
export default useFetchData;