import React, { useState } from "react";
let Product=()=>{
    let [state,setState]=useState({
        Product:{
            slno:"A123",
            image:"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
            name:"My Watch",
            price:14000,
            qty:2
        }
    })
    let increqty=()=>{
        setState((state)=>({
            Product:{
                slno:"A123",
                image:"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
                name:"My Watch",
                price:14000,
                qty:state.Product.qty + 1
            }
        }))
    }
    let decreqty=()=>{
        setState((state)=>({
            Product:{
                slno:"A123",
                image:"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
                name:"My Watch",
                price:14000,
                qty:state.Product.qty - 1 > 0 ? state.Product.qty - 1:1
            }
        }))
    }
    return(
       <div>
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <h1>
                        Welcome to Products
                    </h1>
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
                <tbody>
                    <tr>
                        <td>{state.Product.slno}</td>
                        <td>
                            <img src={state.Product.image} alt="" width={70} height={50} />
                            <img src={state.Product.image} alt="" width={70} height={50} />
                        </td>
                        <td>{state.Product.name}
                        </td>
                        <td>{state.Product.price}
                        </td>
                        <td><i onClick={decreqty} className="fa fa-minus-square  mx- l"></i>
                            {state.Product.qty}
                            <i onClick={increqty}className="fa fa-plus-square  mx-l"></i>
                        </td>
                        <td>{state.Product.qty*state.Product.price}</td>
                    </tr>
                </tbody>

    
                </table> 

        </div>

    </div>

</div>
       </div>
    )
}
export default Product