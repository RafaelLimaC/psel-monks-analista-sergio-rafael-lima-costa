import backgroundImage from "@/assets/background-image.svg";
import "./HeroSection.scss";
import ScrollSVG from "@/components/shared/ScrollSVG";

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
        loading="lazy"
        src={backgroundImage}
        alt="Media Monks"
      />
      <div className="hero-content__detail">
        <ScrollSVG />
      </div>
    </div>
  );
}

export default HeroSection;
