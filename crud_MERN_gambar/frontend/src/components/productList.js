import React, {useState,useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        getProduct();
    },[]);

    const getProduct  = async()=>{
        const response = await axios.get("http://localhost:5000/products");  
        setProduct(response.data);
    }
    const deleteProduk = async(productId)=>{
      try {
        await axios.delete(`http://localhost:5000/products/${productId}`);
        getProduct();
        
      } catch (error) {
        console.log(error);
        
      }

    }


  return (
    <div className="container mt-5">
      <Link to="/add" className='button is-success'>Add +</Link>
        <div className="columns is-multiline">
            {product.map((produk)=>(

                 <div className="column is-one-quarter" key={produk.id}>
                  {console.log("id nya : ",produk.id)}
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={produk.url} alt="image"/>
                      {console.log("url nya : ",produk.url)}
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{produk.name}</p>
                        {console.log("nama nya : ",produk.name)}
                        
                      </div>
                    </div>
                  </div>

                  <footer className='card-footer'>
                    <Link to={`edit/${produk.id}`} className='card-footer-item'>Edit</Link>
                    <a onClick={()=> deleteProduk(produk.id)} className='card-footer-item'>Delete</a>
                  </footer>


                </div>
                
            </div>

            ))}
           
        </div>
    </div>
  )
}

export default ProductList