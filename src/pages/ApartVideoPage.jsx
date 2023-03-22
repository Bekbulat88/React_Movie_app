import axios from 'axios';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { API_KEY, API_URI } from '../const';
const ApartVideoPage = () => {
  const [video, setVideo] = useState('');

  const func1 = async () => {
    const { data } = await axios.get(`${API_URI}/movie/594767/videos`, {
      params: {
        api_key: API_KEY,
        append_to_response: video,
      },
    });

    setVideo(data);
  };
  console.log(video);
  useEffect(() => {
    func1();
    console.log(video);
  }, []);

  return (
    <div>
      <YouTube videoId={'AIc671o9yCI'} />
    </div>
  );
};

export default ApartVideoPage;
