import Card1 from "../../assets/card1.jpg";
import Card2 from "../../assets/card2.jpg";
import Card3 from "../../assets/card3.jpg";
import Card4 from "../../assets/card1.png";
import Card5 from "../../assets/card2.png";
import Card6 from "../../assets/card3.png";

function Layout() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Card1} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={Card2} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={Card3} className="d-block w-100" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={Card4} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Twister Combo</h5>
                  <p className="card-text">
                    Twister + 1 Regular fries + 1 Regular drink
                  </p>
                  <a href="#" className="btn">
                    Add to Bucket
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={Card5} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Twister Combo</h5>
                  <p className="card-text">
                    1 Zinger Stacker + 1 Regular fries + 1 Regular drink
                  </p>
                  <a href="#" className="btn">
                    Add to Bucket
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={Card6} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Twister Combo</h5>
                  <p className="card-text">
                    Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large
                    fries + 2
                  </p>
                  <a href="#" className="btn">
                    Add to Bucket
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={Card5} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Twister Combo</h5>
                  <p className="card-text">
                    An ultimate meal for the fam. It includes 4 Zinger burgers +
                    4
                  </p>
                  <a href="#" className="btn">
                    Add to Bucket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
