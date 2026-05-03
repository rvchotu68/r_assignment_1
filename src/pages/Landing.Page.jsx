import "./Landing.style.css";

import landing from "./../assets/bookstore_landing.svg";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="landing">
      <div className="landing__data">
        <p className="landing__title">Get your new Book Collection</p>
        <Link className="landing__btn" to="/books">
          Explore Now
        </Link>
      </div>
      <div className="landing__img">
        <img src={landing} alt="landing page" width={100} height={100} />
      </div>
    </section>
  );
}

export default Landing;
