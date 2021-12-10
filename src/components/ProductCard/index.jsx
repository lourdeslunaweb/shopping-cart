import { useEffect, useState } from "react";
import { getProducts } from "./api"


const ProductCard = () => {
    const [products, setProducts] = useState([])
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])


    const handleAddToCart = (product) => {
        const exist = cartProducts.find((x) => x._id === product._id);
        if (exist) {
            setCartProducts(
                cartProducts.map((x) =>
                    x.id === product._id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartProducts([...cartProducts, { ...product, qty: 1 }]);
        }
    };




    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(cartProducts))
    }, [cartProducts])
    useEffect(() => {
        getProducts().then((response) => {
            setProducts(response.data.products);
        });
    }, []);
    const stockAlert = () => {
        window.alert("this product is out of stock")
    }
    return (
        <div className="container d-flex justify-content-center flex-wrap" style={{ marginTop: '9em' }}>
            <div className="row d-flex justify-content-center">
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