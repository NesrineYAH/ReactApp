import imageBanner from "../../assets/images/banner/developpement-web-code-bordeaux-business.webp";

const Banner = ({ image, texte }) => {
  return (
    <div className="BannerContainer">
      <h1 className="BannerContainer__h1">
        Développeuse web <br /> Front-end
      </h1>
      <img
        className="BannerContainer__img"
        src={imageBanner}
        alt="bannerDeveloppeur"
      />
      <div className="BannerContainer__shadow"></div>
    </div>
  );
};

export default Banner;
