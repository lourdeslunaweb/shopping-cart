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
        <div className="container d-flex justify-content-center flex-wrap" style={{ marginTop: '11em' }}>
            <div className="row d-flex justify-content-center">
                {products?.map((product, index) => (
                    <div key={index} className="card m-3 shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
                        <img src={product.image} alt="product-img" className="mt-2" />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">{product.price}</p>
                            <button type="button" className="btn btn-outline-dark btn-sm rounded-pill text-capitalize">Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { ProductCard }