import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineCheck } from 'react-icons/ai';
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import HeaderBottamSection from "../header/HeaderBottamSection";
import FooterSection from "../layout/FooterSection";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import { NavLink, json, useNavigate  } from "react-router-dom";
import { BsCart3, BsHeart, BsEye } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const params = useParams();
  const [counter, setCounter] = useState(1);
  const handleClick1 = () => {
    setCounter(counter - 1);
  };
  const handleClick2 = () => {
    setCounter(counter + 1);
  };
  const [ShopDetails, setShopDetails] = useState({});
  const [SizeDetails, setSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const setColor = (item) => {
    setSelectedColor(item);
    // onSelectedColorChange(color);
  }
  const setSizeItem = (item) => {
    setSelectedSize(item);
    // onSelectedColorChange(color);
  }


  useEffect(() => {
    axios
      .post(`https://app.soundchatradio.com:3000/api/v1/auth/productdetails`, {
        id: params.prodoctId,
      })
      .then((response) => {
        setShopDetails(response.data.data);
        setSize(response.data.data.productavailabilities);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params]);
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    trackPromise(
      axios
        .post(`https://app.soundchatradio.com:3000/api/v1/auth/listproduct`)
        .then((response) => {
          setProduct(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  
const jsonItems = JSON.parse(localStorage.getItem("card"));
function addToCart (){
   ShopDetails.quantity = counter
   jsonItems.cart_items.push(ShopDetails)
   localStorage.removeItem('card')
   localStorage.setItem("card",JSON.stringify(jsonItems))
 
}

useEffect(() => {
    if(jsonItems===null){
      localStorage.setItem("card",JSON.stringify({
        quantity: 0,
        total_amount: 0,
        cart_items: []
      }))
    }
}, [jsonItems]);
  
  return (
    <>
      <HeaderBottamSection />
      <div className="store-shoppiner">
        <div className="container">
          <Row>
            <div className="details-product">
              <Col sm={12} md={5} lg={5}>
                <div className="shop-i">
                  <img
                    src={
                      "https://app.soundchatradio.com/soundradiobackend/images/product/" +
                      ShopDetails.image
                    }
                  />
                </div>
              </Col>
              <Col sm={12} md={7} lg={7}>
                <div class="product-dtl">
                  <div class="product-info">
                    <div class="product-name">{ShopDetails.title}</div>
                    <div class="reviews-counter">
                      <div className="rating">
                        <ul>
                          <li className="text-warning">
                            <BsFillStarFill />
                          </li>
                          <li className="text-warning">
                            <BsFillStarFill />
                          </li>
                          <li className="text-warning">
                            <BsFillStarFill />
                          </li>
                          <li>
                            <BsStar />
                          </li>
                          <li>
                            <BsStar />
                          </li>
                        </ul>
                        <span>3 Reviews</span>
                      </div>
                    </div>
                    <div class="product-price-discount">
                      <span>${ShopDetails.Price}</span>
                      <span class="line-through">${ShopDetails.Discount}</span>
                    </div>
                  </div>
                  <p>{ShopDetails.description}</p>
                  <div className="row">
                    <div className="col-md-6">
                      <div class="product-variation product-size-variation">
                        <label class="product-label-text">Size:</label>
                        {/* <ul class="range-variant">
                          {SizeDetails.map((item) => {
                            return (
                              <>
                                {" "}
                                <li  >{item.size}</li>
                              </>
                            );
                          })}
                        </ul> */}
                         <div className="color-chooser">
                          {SizeDetails.map((item) => {
                            return (
                              <>
                                {" "}
                                <div
                                  className={selectedSize === item ? 'color-item-1 color-item-selected-1' : 'color-item-1'}
                                  // style={{ backgroundColor: item.hexcode }}
                  
                                  role="presentation"
                                  onClick={() => setSizeItem(item)}
                                >{item.size}</div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="product-variation product-size-variation">
                        <label class="product-label-text">Color:</label>
                        <div className="color-chooser">
                          {SizeDetails.map((item) => {
                            return (
                              <>
                                {" "}
                                <div
                                  className={selectedColor === item ? 'color-item color-item-selected' : 'color-item'}
                                  // style={{ backgroundColor: item.hexcode }}
                                  style={{ backgroundColor: item.hexcode }}
                                  role="presentation"
                                  onClick={() => setColor(item)}
                                >{selectedColor === item ? <AiOutlineCheck className="icon-color-size"/> :null}</div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="product-count">
                    <label for="size">Quantity:</label>

                    <form action="#" class="display-flex mt-3">
                      <div class="qtyminus" onClick={handleClick1}>
                        -
                      </div>
                      <div className="qnt">{counter}</div>
                      <div class="qtyplus" onClick={handleClick2}>
                        +
                      </div>
                    </form>
                      <button class="round-black-btn" onClick={ () => addToCart()} >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Col>
            </div>
            <Col sm={12} md={12} lg={12}>
              <div className="store-tabs">
                <Tabs
                  defaultActiveKey="Description"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="Description" title="Description">
                    <div className="store-description">
                      <p>{ShopDetails.description}</p>
                    </div>
                  </Tab>
                  <Tab eventKey="Shipping" title="Additional information">
                    <div className="store-description">
                      <h4>Additional information</h4>
                      <p>
                        We deliver to over 100 countries around the world. For
                        full details of the delivery options we offer, please
                        view our Delivery information We hope you’ll love every
                        purchase, but if you ever need to return an item you can
                        do so within a month of receipt. For full details of how
                        to make a return, please view our Returns information
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="Reviews" title="Reviews">
                    <div className="store-description">
                      <div className="row">
                        <div class="col-sm-12 col-md-12 ">
                          <h4>Reviews</h4>
                          <p>There are no reviews yet.</p>
                          <div className="rating">
                            <ul>
                              <li className="text-warning">
                                <BsFillStarFill />
                              </li>
                              <li className="text-warning">
                                <BsFillStarFill />
                              </li>
                              <li className="text-warning">
                                <BsFillStarFill />
                              </li>
                              <li>
                                <BsStar />
                              </li>
                              <li>
                                <BsStar />
                              </li>
                            </ul>
                            <h5 className="mt-3">Your Rating</h5>
                          </div>

                          <form class="shop-form-reviews" role="form">
                            <div className="row">
                              <div class="col-sm-12 col-md-6 ">
                                <label class="form-control-1-lable">
                                  Enter Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control-1"
                                  id="name"
                                  name="name"
                                  value=""
                                  required
                                />
                              </div>

                              <div class="col-sm-12 col-md-6 ">
                                <label class="form-control-1-lable">
                                  Enter Email
                                </label>
                                <input
                                  type="email"
                                  class="form-control-1"
                                  id="email"
                                  name="email"
                                  value=""
                                  required
                                />
                              </div>
                              <div class="col-sm-12 col-md-12 ">
                                <label class="form-control-1-lable">
                                  Enter Message
                                </label>
                                <textarea
                                  class="form-control-1"
                                  rows="4"
                                  name="message"
                                  required
                                ></textarea>
                              </div>
                              <div class="col-sm-12 col-md-6 ">
                                <button id="submit" type="submit" value="SEND">
                                  submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
            <section class="section-products">
              <div class="row">
                <div class="col-md-12 col-lg-12">
                  <div class="header">
                    <h4> Related Products</h4>
                  </div>
                </div>
              </div>

              <div class="row">
                {Product.map((element) => {
                  return (
                    <>
                      <div class="col-sm-6 col-6 col-md-3 col-lg-4 col-xl-3">
                        <NavLink
                          key={"/ProductDetails"}
                          to={`/ProductDetails/${element.id}`}
                          state={{
                            currentvideo: element,
                            related: Product,
                          }}
                        >
                          <div id="product-2" class="single-product">
                            <div class="part-1">
                              <img
                                src={
                                  "https://app.soundchatradio.com/soundradiobackend/images/product/" +
                                  element.image
                                }
                                alt="img-error"
                              />{" "}
                              <span class="discount">
                                {element.Discount} off
                              </span>
                              <ul>
                                <li>
                                  <NavLink to="/Cart">
                                    <i>
                                      <BsCart3 />
                                    </i>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/#">
                                    <i>
                                      <BsHeart />
                                    </i>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/ProductDetails">
                                    <i>
                                      <BsEye />
                                    </i>
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                            <div class="part-2">
                              <h3 class="product-title">{element.title}</h3>
                              <h4 class="product-price">${element.Price}</h4>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    </>
                  );
                })}
              </div>
            </section>
          </Row>
        </div>
      </div>

      <FooterSection />
    </>
  );
}
export default ProductDetails;
