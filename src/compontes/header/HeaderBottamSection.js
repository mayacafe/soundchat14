import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import shop6 from "../../../src/asstes/images/shop6.jpg";
function HeaderBottamSection() {
  const jsonItems = JSON.parse(localStorage.getItem("card"));
  const [ListingCartPop, setListingCartPop] = useState([]);
  const [totalamount, settotalamount] = useState("")
  const [quantityData, setquantityData] = useState(0)
  const [count, setcount] = useState(0);
  const [data, setData] = useState(false);
  const [showText, setShowText] = useState(true);
  const onClick = () => {
    if (showText === false) setShowText(true);
    else setShowText(false);
  };
  useEffect(() => {
    if (jsonItems) {
       setcount(jsonItems.cart_items.length);
      setListingCartPop(jsonItems.cart_items);
    } else {
      setcount(0);
    }
  }, []);

  useEffect(()=>{
    var total = 0
    var quantity = 0
     for (var i = 0; i<ListingCartPop.length; i++) {
       quantity =quantity+ parseInt(ListingCartPop[i].quantity)
       total =total +((parseInt(ListingCartPop[i].quantity))*(parseInt(ListingCartPop[i].Price)))
    }
    settotalamount(total)
    setquantityData(quantity)
  },[ListingCartPop])
  return (
    <div className="header-bottam">
      <div className="header-wrapper">
        <Navbar expand="lg" className="desktop">
          <Container fluid>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto my-2 my-lg-0">
                <NavLink className="header-humger">
                  <FiMenu />
                </NavLink>
                {showText ? (
                  <>
                    <NavLink to="/" className="header-menu">
                      Home
                    </NavLink>
                    <NavLink to="/Listen" className="header-menu">
                      Listen
                    </NavLink>
                    <NavLink to="/Watch" className="header-menu">
                      Watch
                    </NavLink>
                    <NavLink to="/MediaGallery" className="header-menu">
                      Media Gallery
                    </NavLink>
                    <NavLink to="/Interview" className="header-menu">
                      Interviews
                    </NavLink>
                    <NavLink to="/RecapTV" className="header-menu">
                      Recap Tv
                    </NavLink>
                    <NavLink to="/Podcat" className="header-menu">
                      Podcast
                    </NavLink>
                    <NavLink to="/Shop" className="header-menu">
                      Shop
                    </NavLink>
                    <NavLink to="/Contact" className="header-menu">
                      Contact Us
                    </NavLink>
                  </>
                ) : null}

                <NavLink className="header-menu-0" onClick={onClick}>
                  <li onClick={() => setShowText(!showText)}>
                    {!showText ? (
                      <ArrowForwardIosIcon />
                    ) : (
                      <ArrowBackIosNewIcon />
                    )}
                  </li>
                </NavLink>
              </Nav>

              <div className="section-div-right">
                <small className="bottom-pera">Hii, Good day!</small>
              </div>

              <NavLink className="header-menu-1" to="/Login">
                <FaRegUser />
              </NavLink>
              <NavLink className="header-menu-1" onClick={() => setData(!data)}>
                <BsCart />
                <h1 className="header-coutong">{count}</h1>
              </NavLink>

              {data ? (
                <>
                  <div class="card-cat-checkout-man">
                    <div className="total-shping-cart">
                      <div class="scroll-box">
                        <table>
                          <tbody>
                            {ListingCartPop.map((element) => {
                              return (
                                <>
                                  <tr className="main-header-checkout">
                                    <td>
                                      <figure class="itemside align-items-center">
                                        <div class="aside">
                                          <img
                                            className="img-sm"
                                            src={
                                              "https://app.soundchatradio.com/soundradiobackend/images/product/" +
                                              element.image
                                            }
                                          />
                                        </div>
                                        <figcaption class="info">
                                          {" "}
                                          <a
                                            href="#"
                                            class="title text-dark"
                                            data-abc="true"
                                          >
                                            {element.title}
                                          </a>
                                          <p class="text-muted small">
                                          {element.quantity } X {element.Price} SubTotal: {element.quantity*element.Price}
                                          </p>
                                        </figcaption>
                                      </figure>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                            <tr className="main-header-checkout">
                              <td className="main-header-card-tcet">Total</td>
                              <td class="text-right total-new-tt">${totalamount}</td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="row mt-4">
                          <div className="col-md-6">
                            <div className="countinew-shpnig">
                              <NavLink
                                to="/Cart"
                                className="countinew-empty ceconu"
                              >
                                Cart
                              </NavLink>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="countinew-shpnig">
                              <NavLink
                                to="/Checkout"
                                className="countinew-empty ceconu-1"
                              >
                                Checkout
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar expand="lg" className="mobile">
          <Container fluid>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto my-2 my-lg-0">
                <NavLink className="header-humger">
                  <FiMenu />
                </NavLink>
                <NavLink to="/" className="header-menu">
                  Home
                </NavLink>
                <NavLink to="/Listen" className="header-menu">
                  Listen
                </NavLink>
                <NavLink to="/Watch" className="header-menu">
                  Watch
                </NavLink>
                <NavLink to="/MediyGallery" className="header-menu">
                  Media Gallery
                </NavLink>
                <NavLink to="/Interview" className="header-menu">
                  Interviews
                </NavLink>
                <NavLink to="/RecapTV" className="header-menu">
                  Recap Tv
                </NavLink>
                <NavLink to="/Podcat" className="header-menu">
                  Podcat
                </NavLink>
                <NavLink to="/Shop" className="header-menu">
                  Shop
                </NavLink>
                <NavLink to="/Contact" className="header-menu">
                  Contact Us
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="hesder-good-day">
        <div className="section-div-right-1">
          <small className="pera">Hii, Good day!</small>
        </div>
        <NavLink to="/Login" className="header-menu-2">
          <FaRegUser />
        </NavLink>
        <div className="user-profile-new">
          <NavLink  className="header-menu-2 new--menu1" onClick={() => setData(!data)}>
            <BsCart />
            <h1 className="header-coutong">{count}</h1>
          </NavLink>
          {data ? (
                <>
                  <div class="card-cat-checkout-man">
                    <div className="total-shping-cart">
                    <div class="scroll-box">
                      <table>
                        <tbody>
                          {ListingCartPop.map((element) => {
                            return (
                              <>
                                <tr className="main-header-checkout">
                                  <td>
                                    <figure class="itemside align-items-center">
                                      <div class="aside">
                                        <img
                                          className="img-sm"
                                          src={
                                            "https://app.soundchatradio.com/soundradiobackend/images/product/" +
                                            element.image
                                          }
                                        />
                                      </div>
                                      <figcaption class="info">
                                        {" "}
                                        <a
                                          href="#"
                                          class="title text-dark"
                                          data-abc="true"
                                        >
                                          {element.title}
                                        </a>
                                        <p class="text-muted small">{element.quantity} X {element.Price} SubTotal: {element.quantity*element.Price}</p>
                                      </figcaption>
                                    </figure>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                          <tr className="main-header-checkout">
                            <td className="main-header-card-tcet">Total</td>
                            <td class="text-right total-new-tt">${totalamount}</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="row mt-4">
                        <div className="col-md-6">
                          <div className="countinew-shpnig">
                            <NavLink
                              to="/Cart"
                              className="countinew-empty ceconu"
                            >
                              Cart
                            </NavLink>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="countinew-shpnig">
                            <NavLink
                              to="/Checkout"
                              className="countinew-empty ceconu-1"
                            >
                              Checkout
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </>
              ) : null}
        </div>
      </div>
    </div>
  );
}
export default HeaderBottamSection;
