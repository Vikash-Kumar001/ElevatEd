import React from 'react';
import { useEffect, useState } from 'react';
import API from '../services/api';

const useAxios = (url, method = 'get', body = null, headers = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API({ url, method, data: body, headers });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, method, body, headers]);

  return { data, loading, error };
};

export default useAxios;