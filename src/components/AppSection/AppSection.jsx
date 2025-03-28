import "./AppSection.scss";
import appStore from "../../assets/app-store.svg";
import googlePlay from "../../assets/google-play.svg";

function AppSection() {
  return (
    <section className="application">
      <div className="application-wrapper">
        <div className="application-title">
          <h3>Lorem ipsum dolor sit amet consectetur</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo
          </p>
        </div>
        <div className="application-images">
          <img src={appStore} alt="Download disponível na Apple Store" />
          <img src={googlePlay} alt="Download disponível na Play Store" />
        </div>
      </div>
    </section>
  );
}

export default AppSection;
