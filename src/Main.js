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
        Rs <strong>{product.productData.price}</strong>
         </div>
         )
         )}
        </div>
    )
}

export default Main
