import './header.css';
import Logo from '../../assets/logo.png';
import Bucket from "../../assets/bucket.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link order-active">
                <span>DELIVERY</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">
                <span>PICKUP</span>
              </button>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link p-0">
                <img src={Bucket} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link login" href="#">
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
