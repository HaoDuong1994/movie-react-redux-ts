import BannerImg from "../assets/marveldisney.jpg";
const Banner: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full relative">
        <img
          className="w-full absolute opacity-90 object-cover h-screen"
          src={BannerImg}
        />
      </div>
      <div className="z-10 absolute top-0 left-0 h-full w-full flex items-center justify-center space-x-40">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-col space-y-4">
          <div className="w-1/4 text-white bg-gradient-to-r from-red-600 to-white py-1 px-2 text-center">
            TV Shows
          </div>
          <h2 className="text-3xl text-white">Avenger 6 is coming</h2>
          <img
            className="w-1/4"
            src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small/five-stars-rating-icon-png.png"
          />
          <div className="text-white">
            This film marks a major shift as the role of Captain America is
            passed from Steve Rogers Chris Evans to Sam Wilson. It is also the
            beginning of a busy year for Marvel Studios after a quiet period in
            2024.
          </div>
          <div className="flex space-x-4">
            <div className="w-1/4 text-white bg-gradient-to-r from-red-600 to-red-300 py-1 px-2 text-center">
              Details
            </div>
            <div className="w-1/4 text-white bg-green-400 py-1 px-2 text-center">
              Watch
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img src="https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
