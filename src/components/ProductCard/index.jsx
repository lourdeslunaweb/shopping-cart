import { useEffect, useState } from "react";
import { getProducts } from "./api"

const ProductCard = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then((response) => {
            setProducts(response.data.products);
        });
    }, []);
    return (
        <div className="container d-flex flex-wrap">
            <div className="row">
                {products?.map((product, index) => (
                    <div key={index} className="card m-3" style={{ width: '18rem' }}>
                        <img src={product.image} alt="product-img" className="mt-2" />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">{product.price}</p>
                            <button type="button" className="btn btn-dark btn-sm rounded-pill text-capitalize">Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { ProductCard }