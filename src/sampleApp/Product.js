import React, { useState } from 'react';
import axios  from 'axios';

const Product = () => {
    const [productList, setProductList] = useState([]);
    const cityList = ["Pune","Solapur","Nagpur","Mumbai"];

    const getAllProducts = async () => {
        const result =  await axios.get("https://freeapi.gerasim.in/api/BigBasket/GetAllProducts");
        debugger;
        setProductList(result.data.data)
    }
    
    return (
        <div>
            <button className='btn btn-success' onClick={getAllProducts}>Get All Products</button>
            <div className='row'>
                <div className='col-6'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Sr No</th>
                                <th>SKU Code</th>
                                <th>Product Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productList.map((prod,index)=>{
                                    return(<tr>
                                        <td>
                                            <img src={prod.productImageUrl} style={{height:'100px'}} />
                                        </td>
                                        <td> {index +1}</td>
                                        <td> {prod.productSku}</td>
                                        <td> {prod.productName}</td>
                                        <td> {prod.productPrice}</td>
                                    </tr>)
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
                <div className='col-6'>
                    <div className='row'> 
                        {
                            productList.map((product) => {
                                return (<div className='col-4'>
                                    <div class="card" >
                                        <img class="card-img-top" src={product.productImageUrl} style={{ height: '200px' }} />
                                        <div class="card-body">
                                            <h6 class="card-title">{product.productShortName}</h6>
                                            <p class="card-text">{product.categoryName}</p>
                                        </div>
                                    </div>
                                </div>)
                            })
                        } 
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <ul>
                        {
                            productList.map((product) => {
                                return (<li> {product.productShortName}</li>)
                            })
                        }
                    </ul> 
                </div>
                <div className='col-3'>
                    {
                        cityList.map((cityName,index) => {
                            return (<button className='btn btn-success'>  {index}-{cityName}</button>)
                        })
                    }
                </div>
                <div className='col-3'>
                    <select>
                        {
                            cityList.map((city)=> {
                                return (<option>{city}</option>)
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Product;