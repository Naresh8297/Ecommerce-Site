import React, { Fragment } from "react";
// import Product from "./components/Products";
import "./index.css";
import Cart from "./components/Cart";
// import Username from "./components/Username";
// import Loginform from "./components/Loginform";

var App=()=>{
    return(

<Fragment>
            
       <nav className="navbar navbar-dark bg-dark navbar-expand-sm" >
      <a href="/" className="navbar-brand">React With Ecommerce Project</a>
       </nav>
       {/* <Product/> */}
       <Cart/>
       {/* <Username/> */}
        {/* <Loginform/> */}
        </Fragment>
    

    )
}
export default App;