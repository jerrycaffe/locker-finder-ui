import React, { useEffect, useState } from "react";
import logoIcon from "../img/random-icon.jpg";
import ratingImg from "../img/hub-lock.jpeg";
import axios from "axios";
import SelectBtn from "../components/SelectBTN";
import { Link } from "react-router-dom";

const Index = ({ history }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const callHubLocker = async () => {
    console.log(search);
    if (search.trim() === "") {
      try {
        const { data } = await axios.get("http://localhost:8080/api/v1/locker");
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleSearchLocker = async ({ target }) => {
    try {
      const { value } = target;
      setSearch(value);
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/locker/search?value=${value}`
      );

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callHubLocker();
  }, [search]);
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
                      onChange={handleSearchLocker}
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
                {data.length !== 0
                  ? `${data.length} Open Lockers Available`
                  : "There is No Locker Available in this location"}
              </div>
              <div className="header__sorting">
                <div className="header__footer__sort_title font-medium font-grey pd-2">
                  Sort By
                </div>
                <div className="header_footer_sort_item">
                  <SelectBtn
                    list={["Closest", "Lowest Price"]}
                    name="Closest"
                  />
                </div>
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
                    {/* <div className="title">Featured</div> */}
                    <SelectBtn
                      list={["Small", "Medium", "Large"]}
                      name="Featured"
                    />
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
                    {data.map((value, idx) => (
                      <tr className="tr-body" key={idx}>
                        <td>{value.name}</td>

                        <td>{value.description}</td>

                        <td>{value.quantity} Available</td>

                        <td>{value.state}</td>

                        <td>{value.city}</td>
                        <td>
                          <Link to="/rent-now" className="btn-primary">
                            Rent Now
                          </Link>
                        </td>
                      </tr>
                    ))}
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

export default Index;
