import React,{useEffect,useState} from 'react'
import data from './data1.json'
import Products from './Products'

function Main() {
    const [products, setproduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        console.log(loading)
       setTimeout(()=>{
        setproduct(data.data.products)
       }, 2000) 
        setLoading(false);
        console.log(products)
      },[products]);
    
    return (
        <div>
        < Products products={products} loading={loading} />
        </div>
    )
}

export default Main
