import CloudinaryImage from "./CloudinaryImage";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductoList = ({ products, title }) => {
    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {products.map(product => (
          <div className="product-preview" key={product._id}>
            <Link to= {`/${product._id}`}>
              <h2>{ product.name }</h2>
              <p>Vendedor: { product.user }</p>
              <h2>ImageId: { product.imageId }</h2>
              <img src={CloudinaryImage(product.imageId)} />
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default ProductoList;