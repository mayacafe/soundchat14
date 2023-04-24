import React, { useEffect, useState } from "react";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";
import { BsFillTrashFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Cart() {
  const [CartListing, setCartListing] = useState([]);
  const [totalamount, settotalamount] = useState("")
  const [quantityData, setquantityData] = useState(0)
  const [deletestate, setdeletestate] = useState(true)
  const [RemoveItemsAll, setRemoveItemsAll] = useState("state")
  useEffect(() => {
    const jsonItems = JSON.parse(localStorage.getItem("card"));
    setCartListing(jsonItems.cart_items);
  }, [deletestate]);
var removeindex = ""
  function removeItems(id,indexvalue){
  let cart_data = CartListing
  const a = cart_data.find(function(item, i){
    if(item.id === id && i===indexvalue){
      removeindex=i
      cart_data.splice(i,1)
      const newcarddata ={}
      newcarddata.quantity = cart_data.length
      newcarddata.total_amount=0;
      newcarddata.cart_items=cart_data
      localStorage.removeItem('card')
      localStorage.setItem("card",JSON.stringify(newcarddata))
      setdeletestate(!deletestate)
      return i
    }
  });
  }
  
  function RemoveAllItems (){
    localStorage.removeItem("card");
    localStorage.setItem("card",JSON.stringify({
      quantity: 0,
      total_amount: 0,
      cart_items: []
    }))
    const jsonItems = JSON.parse(localStorage.getItem("card"));
    setCartListing(jsonItems.cart_items);
    if(RemoveItemsAll==="state"){
      setRemoveItemsAll("updatestate")
    }else{
      setRemoveItemsAll("state")
    }
    
  }
  useEffect(()=>{
    var total = 0
    var quantity = 0
     for (var i = 0; i <CartListing.length; i++) {
       quantity =quantity+ parseInt(CartListing[i].quantity)
       total =total +((parseInt(CartListing[i].quantity))*(parseInt(CartListing[i].Price)))
    }
    settotalamount(total)
    setquantityData(quantity)
  },[CartListing,RemoveItemsAll])


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
                      {CartListing.map((listing, index , array) => {
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
                                    <div
                                      class="title text-dark"
                                      data-abc="true"
                                    >
                                      {listing.title}
                                    </div>
                                  </figcaption>
                                </figure>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  name="1[qty]"
                                  class="text-center cart"
                                  defaultValue={listing.quantity}
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
                                <i >
                                  <BsFillTrashFill onClick={() => removeItems(listing.id,index)} />
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
                  {(CartListing.length>0)?
                  <>
                  <div className="countinew-shpnig">
                    <button className="countinew-empty ceconu" onClick={() => {RemoveAllItems()}} >
                      Remove All
                    </button>
                  </div>
                </>
                :<></>}
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
                      {/* <tr>
                        <td className="cart-total-text">Total w/o Tax</td>
                        <td class="text-right total-new-tt">$847.46</td>
                      </tr>
                      <tr>
                        <td className="cart-total-text">Product Tax</td>
                        <td class="text-right total-new-tt">$152.54</td>
                      </tr> */}
                      <tr>
                        <td className="cart-total-text">Total</td>
                        <td class="text-right total-new-tt">${totalamount}</td>
                      </tr>
                      <tr>
                        <td className="cart-total-text">Tax</td>
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
                      <span>${totalamount}</span>
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
