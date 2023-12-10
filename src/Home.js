import ProductoList from "./ProductList";
import useApi from "./useApi"

import React from 'react';

const Home = () => {
  const {data, isPending, error} = useApi("http://localhost:8000/")
  
  return (
    <div className="home">
        {error && <dif> Error: {error} </dif>}
        {isPending && <div> Loading... </div>}
        {data && <ProductoList products={data} title="Productos Destacados" />}
    </div> 
  );
}
 
export default Home;