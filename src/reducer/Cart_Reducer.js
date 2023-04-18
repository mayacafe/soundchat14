const cartReducer = (state, action) => {
      if(action.type === "ADD_TO_CART"){
            let {ShopDetails} = action.payload;
            console.log(ShopDetails, "hii this ok")
      }
      return state
}

export default cartReducer