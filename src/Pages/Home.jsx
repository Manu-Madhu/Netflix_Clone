import React, { useState } from "react";
import Main from "../Components/Main";
import Cards from "../Components/Cards";
import { Request } from "../Api";
import axios from "axios";
import Youtube from "react-youtube";
import { GrClose } from "react-icons/gr";

const Home = () => {
  // const [videoId, setVideoId] = useState('');
  const [urlId, setUrlId] = useState("");
  const opts = {
    height: "490", // Set your desired height here
    width: "740",
    playerVars: {
      autoplay: 1,
    },
  };

  const idHandler = (value) => {
    //  setVideoId(value)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${value}/videos?api_key=${Request.requestAPI}`
      )
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Array Empty");
        }
        console.log(response);
      });
  };
  const onClose = () => {
    setUrlId("");
  };
  return (
    <div>
      <Main />
      {urlId && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="modal-content bg-transparent p-8 rounded-xl relative">
            <button className="absolute top-4 right-4 text-gray-600 bg-white rounded-xl p-1"
              onClick={onClose}>
              <GrClose size={24} />
            </button>
            <Youtube opts={opts} videoId={urlId.key} />
          </div>
        </div>
      )}
      <Cards value={idHandler} rowId="1" title="Top Rated" fetchURL={Request.reqestTopRated}/>
      <Cards value={idHandler} rowId="2" title="Upcoming"fetchURL={Request.reqestUpcoming} />
      <Cards value={idHandler}rowId="3" title="Trending" fetchURL={Request.reqestTtrending}/>
    </div>
  );
};

export default Home;
