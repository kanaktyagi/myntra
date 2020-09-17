import React,{useEffect,useState} from 'react'
import './Main.css'
import data from './data1.json'

function Main() {
    const [products, setproduct] = useState([]);

    useEffect(() => {
        setproduct(data.data.products)
        console.log(products)
      },[products]);

    
    return (
        <div className="product">
         {products.map((product) => (
             <div className="product__info">
            <img className="product__image"
            src={product.categoryImages.map(url => url)}
            alt="cant display image"
          />
       <div className="product__name">  {product.productData.categoryName}</div>
       
          <span style={{paddingLeft: "15px",paddingBottom: "10px"}}>₹</span> <strong >{parseInt(product.productData.specialPrice).toLocaleString()}</strong><span style={{textDecoration: "line-through", paddingLeft: "10px",  color: "rgb(124, 121, 121)", fontSize: "12px"}}>{parseInt(product.productData.price).toLocaleString()} </span>
          <div><small style={{ paddingLeft: "15px",color: "rgb(124, 121, 121)", fontSize: "12px"}}>{product.productData.discountPercentage} off on making charges</small></div>
          </div>
         )
         )}
        </div>
    )
}

export default Main
