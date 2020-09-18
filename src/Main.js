import React,{useEffect,useState} from 'react'
import data from './data1.json'
import Products from './Products'
import Filter from './Filter'

function Main() {
    const [products, setproduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        setLoading(true);
        console.log(loading)
       setTimeout(()=>{
        setproduct(data.data.products)
       }, 2000) 
        setLoading(false);
        console.log(products)
      },[products]);

    const  callback = ([count]) => {
        // do something with value in parent component, like save to state
        // setFilter([count])
    }

    return (
        <div style={{ display:"flex"}}>
        {console.log("filter", filter)}
        {console.log("hiiiii")}
    
       <Filter parentCallback={callback}/> 
       
        < Products products={products} loading={loading} />
        </div>
    )
}

export default Main
