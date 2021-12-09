import { useEffect, useState } from "react"
import { BackBtn } from ".."
import { buyProducts } from "./api"

const Cart = () => {
    const [arrayProducts, setArrayProducts] = useState(JSON.parse(localStorage.getItem('products')))
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(
            (arrayProducts.reduce((acum, product) => {
                return acum + Number(product.price.slice(1));
            }, 0)).toFixed(2)
        )
    }, [arrayProducts]);
    const handleDeleteProduct = (product) => {
        const newArr = arrayProducts.filter(p => p.id_LC  !== product.id_LC );
        console.log(newArr)
        setArrayProducts(localStorage.setItem('products', JSON.stringify(newArr)))
    }
    const handleBuy = async () => {
        buyProducts()
            .then((response) => {
                window.alert("your purchase was successful")
            })
            .catch((err) => {
                window.alert("oops! An error occurred. Please, try again later.")
            })
    }
    return (
        <div className="container d-flex align-items-center justify-content-center flex-column mb-5">
            <div className="card border-primary mb-3 mt-5 shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '20rem' }}>
                <div className="card-header d-flex">
                    <span className="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="125" height="25" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg></span>
                    <h5>My Cart</h5>
                </div>
                {arrayProducts.length === 0 ?
                    <div className="card-body">
                        <h4 className="card-title text-capitalize">Your Cart Is Empty</h4>
                    </div>
                    :
                    <div className="card-body">
                        <h4 className="card-title text-capitalize">List of your products:</h4>
                        <ul className="list-group">
                            {arrayProducts?.map((product, index) =>
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>{product.name}</span>
                                    <span className="badge bg-primary rounded-pill">{product.price}</span>
                                    <button className="btn"><span className="badge bg-danger rounded-pill" onClick={() => handleDeleteProduct(product)}>X</span></button>
                                </li>)}
                        </ul>
                        <div className="card-footer d-flex justify-content-between align-items-center">
                            <span>Total:</span>
                            <span className="badge bg-primary rounded-pill"><span>$</span>{total}</span>
                            <button className="btn"><span className="badge bg-success rounded-pill text-capitalize" onClick={() => handleBuy()}>Buy Now</span></button>
                        </div>
                    </div>
                }
            </div>
            <BackBtn />
        </div>
    )
}

export { Cart }