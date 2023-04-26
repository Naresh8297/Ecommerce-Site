import React, { useState } from "react";
import Product from "./Products";
let Cart=()=>{
    let [state,setState]=useState({
        products:[{
            slno:"001",
            image:"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
            name:"Samsung Watch",
            price:1200,
            qty:1
        },
        {
            slno:"002",
            image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713659063%2C1660927566964%2C1661371890735",
            name:"Apple Watch",
            price:5000,
            qty:1
        },
        {
            slno:"003",
            image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkCK7_bVbag29u6zPn3_TWhPoQDgDVJpUAa5TdsEsFG38_KD4L8d_MNPzutDWqTRpT5SCfgbqXMFA9UK69XzaKL1N-_6Qm1f6T8vZWqEsUdZq79D2pkHGM5d5dvqWz3BYzQg&usqp=CAc",
            name:"Sony Watch",
            price:3000,
            qty:1
        },
        {
            slno:"004",
            image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713659063%2C1660927566964%2C1661371890735",
            name:"Reebok Watch",
            price:2000,
            qty:1
        },]
})
let {products}=state;
let increqty=(productId)=>{
    let items=products.map(product=>{
        if(product.slno === productId){
            return {
                ...product,
                qty: product.qty + 1
            };
        }
        return product;
    });
    setState((state)=>({
        products: items
    }));
}
let decreqty=(productId)=>{
    let items=products.map(product=>{
        if(product.slno === productId){
            return {
                ...product,
                qty: product.qty - 1 > 0 ? product.qty - 1: 1
            };
        }
        return product;
    });
    setState((state)=>({
        products: items
    }));
}
let GrandTotal=()=>{
    let total = 0 ;
    for(let product of products){
        total += product.price * product.qty;
    }
      return total;
}

    return(
        <div>
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <h4>
                        Welcome to Naresh Shop
                    </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nihil, numquam veniam quasi ex perferendis quibusdam obcaecati consectetur accusantium quod consequatur. Perspiciatis iure aliquam cumque quaerat commodi explicabo dolore molestiae?</p>
                </div>
            </div>
        </div>
        <div className="container mt-3">
    <div className="row">
        <div className="col">
            <table className="table table-striped text-center table-hover">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>Sl.No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qunatity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>{
         products.map((products)=>{
                        return(
                             <tr key={products.slno}>
                        <td>{products.slno}</td>
                        <td>
                            <img src={products.image} alt="" width={70} height={50} />
                        </td>
                        <td>{products.name}
                        </td>
                        <td>&#8377;{products.price.toFixed(2)}
                        </td>
                        <td><i onClick={()=> decreqty(products.slno)} className="fa fa-minus-square  mx- l"></i>
                            {products.qty}
                            <i onClick={()=> increqty(products.slno)} className="fa fa-plus-square  mx-l"></i>
                        </td>
                        <td>&#8377;{(products.qty * products.price).toFixed(2)}</td>
                    </tr>  

                        )

                    })
                }
                <tr >
                    <td colSpan={4}></td>
                    <td >Grand Total :</td>
                    <td>&#8377;{GrandTotal().toFixed(2)}</td>
                </tr>
                    
                 </tbody>
                  
    
                </table> 

        </div>

    </div>

</div>
        
        </div>
    )
}
export default Cart