import React from "react";
import logoIcon from "../img/random-icon.jpg";
import ratingImg from "../img/hub-lock.jpeg";

const index = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="top-nav">
          <div className="navbar">
            <nav className="navbar__nav">
              <div className="navbar__logo-wrapper">
                <img src={logoIcon} alt="" className="navbar__logo" />
              </div>

              <ul>
                <li>
                  <a href="#" className="btn-text">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="btn-text">
                    Find a Locker
                  </a>
                </li>
                <li>
                  <a href="#" className="btn-text">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="btn-text">
                    Location
                  </a>
                </li>
                <li>
                  <a href="#" className="btn-text">
                    Help Center
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="#" className="btn-text">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="btn-text">
                    080-188-0872
                  </a>
                </li>
                <li>
                  <a href="#" className="btn-text btn-active">
                    pay your bill
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <section>
            <header className="header">
              <div className="header__search-container">
                <div className="font-big">Find a Locker</div>

                <div className="">
                  <form className="header__form">
                    <input
                      type="text"
                      className="header__search_input"
                      placeholder="Enter City or State"
                    />
                    <div className="header__search_block">
                      <div className="search_block_title font-medium font-light">
                        Find Locker
                      </div>
                      <div className="search__block__content bg-light">
                        Always Get you covered
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </header>
            <div className="header__footer">
              <div className="locker-status font-medium font-grey">
                6 Open Lockers Available
              </div>
              <div className="header__sorting">
                <div className="header__footer__sort_title font-medium font-grey">
                  Sort By
                </div>
                <div className="header_footer_sort_item">Channel</div>
              </div>
            </div>
          </section>

          <section>
            <main className="main__container">
              <div className="main__left-pane">
                <img src={ratingImg} alt="" className="main__left-locker-img" />
                <a href="#"></a>
                <div className="main__left-rating">
                  22A Adels Channel Street VI <br />
                </div>
                <div className="main__left-rating-status"></div>
              </div>
              <div className="main__right-pane">
                <div className="main__right-filter-section">
                  <div className="main__filter-by">
                    Featured
                    <ul>
                      <li>Small</li>
                      <li>Medium</li>
                      <li>Large</li>
                    </ul>
                  </div>
                  <div className="main__view">
                    <a href="#">View the Guide size by</a>{" "}
                  </div>
                </div>
                <table className="main__table">
                  <thead>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </thead>

                  <tbody>
                    <tr className="tr-body">
                      <td>Name</td>

                      <td>Description</td>

                      <td>Talk</td>

                      <td>2 Available</td>

                      <td>Rent Now</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default index;
