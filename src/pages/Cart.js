import React, { useEffect, useState } from "react";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";
import { BsFillTrashFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Cart() {
  const [CartListing, setCartListing] = useState([]);
  const [RemoveData, setRemoveData] = useState([]);
  const [totalamount, settotalamount] = useState(0)
  const [quantityData, setquantityData] = useState(0)
  const [pricedata, setpricedata] = useState(0)
  useEffect(() => {
    const jsonItems = JSON.parse(localStorage.getItem("card"));
    setCartListing(jsonItems.cart_items);
    // settotalamount(jsonItems.total_amount);
    // setquantityData(jsonItems.quantity)
  }, []);

  //  function findId(CartListing, key) {
  //   let prod_Id = [];
  //   CartListing.forEach((id_1)=>{
  //  if(prod_Id.some((val) => {return val[key] == id_1[key] })){
  //   prod_Id.forEach((id_2)=>{
  //     if(id_2[key] === id_1[key]){
  //       id_2["occurrence"]++
  //     }
  //   })
  //  }else{
  //     let sec_Id = {}
  //     sec_Id[key] = id_1[key]
  //     sec_Id["occurrence"] = 1
  //     prod_Id.push(sec_Id)
  //  }
  //   })

  //   return prod_Id
  //  }

  function removeItems(index){
   console.log(CartListing[index],index)
  //   const jsonItems = JSON.parse(localStorage.getItem("card"));
  //  let cartdata =  CartListing.pop(index)
  //     console.log(cartdata, "remov")
  //     jsonItems.cart_items.push(CartListing)
  //  localStorage.setItem("card",JSON.stringify(jsonItems))
  }

  // useEffect(()=>{
  //   for (var i = 0; i <CartListing.length; i++) {
  //     setquantityData(quantityData+CartListing[i].quantity)
  //     setpricedata(parseInt(pricedata)+((parseInt(CartListing[i].quantity))*(parseInt(CartListing[i].Price))))
  //   }
  // },[CartListing])
  // console.log(pricedata, "cartitem");

  return (
    <>
      <HeaderBottamSection />
      <div className="cart-main">
        <div class="container">
          <h2 className="cart-text mb-5">Shopping Cart</h2>
          <div class="row">
            <aside class="col-lg-8">
              <div class="card">
                <div class="table-responsive">
                  <table class="table table-borderless table-shopping-cart">
                    <thead class="text-muted">
                      <tr class="small text-uppercase">
                        <th scope="col" width="350">
                          Product
                        </th>
                        <th scope="col" width="150">
                          Quantity
                        </th>
                        <th scope="col" width="120">
                          Price
                        </th>

                        <th scope="col" width="100">
                          Subtotal
                        </th>
                        <th scope="col" width="50" class="cart-delete-1">
                          <BsFillTrashFill />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {CartListing.map((listing, index) => {
                        return (
                          <>
                            <tr key={listing.name}>
                              <td>
                                <figure class="itemside align-items-center">
                                  <div class="aside">
                                    <img
                                      className="img-sm"
                                      src={
                                        "https://app.soundchatradio.com/soundradiobackend/images/product/" +
                                        listing.image
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
                                      {listing.title}
                                    </a>
                                  </figcaption>
                                </figure>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  name="1[qty]"
                                  class="text-center cart"
                                  defaultValue={listing.quantity}
                                  //   onClick={ () => findId(CartListing, "id")}
                                />
                              </td>
                              <td>
                                <div class="price-wrap">
                                  <p class="price">${listing.Price}</p>{" "}
                                </div>
                              </td>
                              <td>
                                <div class="price-subtile">
                                  ${listing.Price * listing.quantity }
                                </div>
                              </td>

                              <td class="cart-delete">
                                <i onClick={() => removeItems(listing.id)}>
                                  <BsFillTrashFill />
                                </i>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row mt-4 nee">
                <div className="col-md-6 col-sm-6 col-6">
                  <div className="countinew-shpnig">
                    <NavLink className="countinew-empty ceconu">
                      Remove All
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-6">
                  <div className="countinew-shpnig">
                    <NavLink to="/shop" className="countinew-empty county">
                      <i>
                        {" "}
                        <FaShare />
                      </i>
                      Continue Shopping
                    </NavLink>
                  </div>
                </div>
              </div>
            </aside>

            <aside class="col-lg-4">
              <div class="card">
                <div className="total-shping-cart">
                  <h5> CART TOTALS</h5>
                  <table>
                    <tbody>
                      <tr>
                        <td className="cart-total-text">Total w/o Tax</td>
                        <td class="text-right total-new-tt">$847.46</td>
                      </tr>
                      <tr>
                        <td className="cart-total-text">Product Tax</td>
                        <td class="text-right total-new-tt">$152.54</td>
                      </tr>
                      <tr>
                        <td className="cart-total-text">Total</td>
                        <td class="text-right total-new-tt">$1,000.00</td>
                      </tr>
                      <tr>
                        <td className="cart-total-text">Order Tax</td>
                        <td class="text-right total-new-tt">0.00</td>
                      </tr>
                      <tr>
                        <td className="cart-total-text">Shipping *</td>
                        <td class="text-right total-new-tt">0.00</td>
                      </tr>
                      <tr>
                        <td colspan="2"></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="grand-tut-t1">
                    <h6>
                      Grand Total
                      <span>$1,000.00</span>
                    </h6>
                  </div>
                  <div className="checkout">
                    <NavLink to="/Checkout" className="block">
                      Checkout
                    </NavLink>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
