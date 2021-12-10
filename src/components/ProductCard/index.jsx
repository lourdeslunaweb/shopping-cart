import { useEffect, useState } from "react";
import { Loading } from "../Loading";
import { getProducts } from "./api";
import swal from 'sweetalert';


const ProductCard = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])
    const handleAddToCart = (product) => {
        setCartProducts(prevState => ([...prevState, product]))
    }
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(cartProducts))
    }, [cartProducts])
    useEffect(() => {
        getProducts().then((response) => {
            setIsLoading(false)
            setProducts(response.data.products);
        });
    }, []);
    const stockAlert = () => {
        swal({
            title: "Oooops!!",
            text: "This Product Is Out Of Stock",
            icon: "warning",
        })
    }
    return (
        <div className="container d-flex justify-content-center flex-wrap" style={{ marginTop: '9em' }}>
            <div className="row d-flex justify-content-center">
                {isLoading ? <Loading /> : null}
                {products?.map((product) => (
                    <div key={product._id} className="card m-3 shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
                        <img src={product.image} alt="product-img" className="mt-2" />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">Stock: {product.stock}</p>
                            <p className="card-text">{product.price}</p>
                            {product.stock === 0 ?
                                <button type="button" className="btn btn-outline-dark btn-sm rounded-pill text-capitalize" onClick={() => stockAlert()}>Out of Stock</button>
                                : <button type="button" className="btn btn-outline-dark btn-sm rounded-pill text-capitalize" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { ProductCard }