import BannerImg from "../assets/marveldisney.jpg";
const Banner: React.FC = () => {
  return (
    <div className="w-full h-[600px] relative">
      <img
        className="w-full opacity-90 object-cover absolute"
        src={BannerImg}
      />
      <div>
        <div></div>
      </div>
    </div>
  );
};
export default Banner;
