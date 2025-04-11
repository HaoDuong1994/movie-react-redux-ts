import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovie } from "../Redux/Slice/MovieSlice";
import { RootState, AppDispatch } from "../Redux/store";
import { fetchVideo } from "../Redux/Slice/VideoSlice";
import Modal from "react-modal";
import YouTube from "react-youtube";
const PopularMovie: React.FC = () => {
  //set Open trailer
  const [isOpenTrailer, setIsOpenTrailer] = useState<boolean>(false);
  //Gey key video
  const [videoKey, setVideoKey] = useState<string>("");
  //Carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  //Modal movie Style
  const customStyles = {
    overlay: {
      zIndex: 999,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "100000",
    },
  };
  // Op youtube
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchPopularMovie());
  }, [dispatch]);
  const state = useSelector((state: RootState) => state.movie);
  const { results } = state;
  const handleVideo = (id: number) => {
    dispatch(fetchVideo(id.toString()));
    setVideoKey(trailerItemList[0].key);
    setIsOpenTrailer(true);
  };
  const trailerItemList = useSelector((state: RootState) => {
    return state.video.results;
  });
  const handleLeaveTrailer = (): void => {
    setIsOpenTrailer(false);
  };
  return (
    <div>
      <h2 className="text-red-600 text-2xl font-semibold">Popular Movies</h2>
      <Carousel responsive={responsive} className="mt-8 flex items-center">
        {results.map((film) => {
          return (
            <div
              onClick={() => {
                handleVideo(film.id);
              }}
              className="flex-none w-48 hover:scale-105 transition duration-500 ease-in-out cursor-pointer">
              <img
                src={`${import.meta.env.VITE_MOVIE_BASE_URL}${
                  film.poster_path
                }`}
              />
              <div className="text-white text-lg font-sans font-medium">
                {film.title}
              </div>
            </div>
          );
        })}
      </Carousel>
      <Modal
        onRequestClose={() => {
          handleLeaveTrailer();
        }}
        isOpen={isOpenTrailer}
        style={customStyles}
        contentLabel="Example Modal">
        <YouTube videoId={videoKey} opts={opts} />
      </Modal>
    </div>
  );
};
export default PopularMovie;
