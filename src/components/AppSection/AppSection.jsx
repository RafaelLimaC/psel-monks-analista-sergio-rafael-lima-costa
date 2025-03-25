import "./AppSection.scss";
import appStore from "../../assets/app-store.svg";
import googlePlay from "../../assets/google-play.svg";

function Application() {
  return (
    <section className="application">
      <div className="application-wrapper">
        {/* TODO create a component for titles */}
        <div className="application-title">
          <h3>Lorem ipsum dolor sit amet consectetur</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo
          </p>
        </div>
        <div className="application-images">
          <img src={appStore} alt="" />
          <img src={googlePlay} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Application;
