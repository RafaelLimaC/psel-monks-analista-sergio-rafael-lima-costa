import backgroundImage from "../../assets/background-image.svg";
import scroll from "../../assets/scroll.svg";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <div className="hero-content">
      <div className="hero-content__text">
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faucibus sit scelerisque quis commodo aenean viverra
        </p>
      </div>
      <img
        decoding="async"
        className="hero-content__image"
        src={backgroundImage}
        alt="Media Monks"
      />
      <div className="hero-content__detail">
        <img src={scroll} alt="Role para baixo" />
      </div>
    </div>
  );
}

export default HeroSection;
