import React,{useEffect,useState} from 'react'
import data from './data/data.json'
import Products from './Products'
import Filter from './Filter'

function Main() {
    const [products, setproduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [maxPrice, setMaxPrice] = useState(50000);
    

    useEffect(() => {
        setLoading(true);
        console.log(loading)
       setTimeout(()=>{
        const filteredData =  data.data.products.filter(product => (
            parseInt(product.productData.specialPrice) < maxPrice
        ))
        setproduct(filteredData)
       }, 1000) 
        setLoading(false);
        console.log(products)
      },[maxPrice]);

    const  callback = ([count]) => {
        // do something with value in parent component, like save to state
        console.log("count", count)
        setMaxPrice(count)
    }

    return (
        <div style={{ display:"flex"}}>
    
       <Filter parentCallback={callback}/> 
        < Products products={products} loading={loading} />
        </div>
    )
}

export default Main
