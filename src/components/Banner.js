import "./styles/banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="banner">
        <div className="banner-text">
          <h1>25% de remise sur vos articles favoris</h1>
          <h3>Réservé aux Membres Nike. Entrez le code BTS21 lors du paiement.*</h3>
          {/* <div className="d-flex justify-content-center mt-4">
          <Link to="/">
          <button className="button button--aylen button--round-l button--text-thick">Inscription</button>
		 </Link>
         <Link to="/">
          <button className="button button--aylen button--round-l button--text-thick">Magasins</button>
		 </Link>
         </div> */}

        </div>
      </div>
    )
}

export default Banner
