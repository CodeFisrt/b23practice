import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
    const [productList, setProductList] = useState([]);
    const [categoryList, setcategoryList] = useState([]);
    const cityList = ["Pune", "Solapur", "Nagpur", "Mumbai"];
    const [productObj,setProduct]= useState({
        "productId": 0,
        "productSku": "",
        "productName": "",
        "productPrice": 0,
        "productShortName": "",
        "productDescription": "",
        "createdDate": "2024-04-05T14:00:02.609Z",
        "deliveryTimeSpan": "",
        "categoryId": 0,
        "productImageUrl": ""
    })

    useEffect(()=>{
        getAllCategory();
        getAllProducts();
    }, [])
    const getAllCategory = async () => {
        
        const result = await axios.get("https://freeapi.gerasim.in/api/BigBasket/GetAllCategory");
        debugger;
        setcategoryList(result.data.data)
    }
    const updateFormValue = (event, key) => {
        setProduct((prevObj) => ({ ...prevObj, [key]: event.target.value }));
    };
     const onSaveProduct = async () => {
        debugger;
        const response =  await axios.post("https://freeapi.gerasim.in/api/BigBasket/CreateProduct",productObj);
        debugger;
        if(response.data.result == true) {
            alert('Product Created Success');
            getAllProducts();
        } else {
            alert(response.data.message)
        }
     }

    const getAllProducts = async () => {
        const result = await axios.get("https://freeapi.gerasim.in/api/BigBasket/GetAllProducts");
        debugger;
        setProductList(result.data.data)
    }

    return (
        <div>
             
            <div className='row'>

                <div className='col-8'>
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
                <div className="col-4">
                    <div className="card">
                        <div className="card-header bg-primary">New Product</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Product Sku</label>
                                    <input
                                        type="text" onChange={(event) => { updateFormValue(event, 'productSku') }}
                                        placeholder="Enter ProductSku"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>Product Name</label>
                                    <input
                                        type="text" onChange={(event) => { updateFormValue(event, 'productName') }}
                                        placeholder="Enter Product Name"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Price</label>
                                    <input
                                        type="text" onChange={(event) => { updateFormValue(event, 'productPrice') }}
                                        placeholder="Enter Price"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>Short Name</label>
                                    <input
                                        type="text" onChange={(event) => { updateFormValue(event, 'productShortName') }}
                                        placeholder="Enter Short name"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Description</label>
                                    <input
                                        type="text" onChange={(event) => { updateFormValue(event, 'productDescription') }}
                                        placeholder="Enter Description"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Delivery Time Span</label>
                                    <input
                                        type="text" onChange={(event) => { updateFormValue(event, 'deliveryTimeSpan') }}
                                        placeholder="Enter Delivery Time Span"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>Select Category</label>
                                    <select class="form-select" onChange={(event) => { updateFormValue(event, 'categoryId') }}>
                                        {
                                        categoryList.map((item)=>{
                                            return (<option value={item.categoryId}> {item.categoryName}</option>)
                                        })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Image</label>
                                    <input
                                        type="text" onChange={(event) => { updateFormValue(event, 'productImageUrl') }}
                                        placeholder="Enter Delivery Time Span"
                                        className="form-control"
                                    />
                                </div>
                            </div>

                            <div className="row pt-3">
                                <div className="col-6 text-center">
                                    <button className="btn btn-secondary">Reset</button>
                                </div>
                                <div className="col-6 text-center">
                                    <button className="btn btn-success"  onClick={onSaveProduct}>
                                        Create Patient
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className='row'>
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
            </div> */}
        </div>
    );
};

export default Product;