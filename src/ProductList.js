import CloudinaryImage from "./CloudinaryImage";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductoList = ({ products, title }) => {
    return (
      <div className="product-body">
        <h2 className="title">{ title }</h2>
        <div className="product-list">
        {products.map(product => (
          <div className="product-preview" key={product._id}>
            <Link to= {`/${product._id}`}>
              <img src={CloudinaryImage(product.imageId)} />
              <h2>{ product.name }</h2>
              <h2> ${ product.startingPrice }</h2>
            </Link>
          </div>
        ))}
        </div>
      </div>
    );
  }
   
  export default ProductoList;