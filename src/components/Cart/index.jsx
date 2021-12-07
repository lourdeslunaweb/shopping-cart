import { BackBtn } from ".."

const Cart = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center flex-column mb-5">
            <div className="card border-primary mb-3 mt-5" style={{ width: '30rem' }}>
                <div className="card-header d-flex">
                    <span className="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="125" height="25" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg></span>
                    <h5>My Cart</h5>
                </div>
                <div className="card-body">
                    <h4 className="card-title text-capitalize">List of your products:</h4>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span>Caesar salad</span>
                            <span className="badge bg-primary rounded-pill">$123.45</span>
                            <button className="btn"><span className="badge bg-danger rounded-pill">X</span></button>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span>French Fries</span>
                            <span className="badge bg-primary rounded-pill">$123.45</span>
                            <button className="btn"><span className="badge bg-danger rounded-pill">X</span></button>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span>Caesar salad</span>
                            <span className="badge bg-primary rounded-pill">$123.45</span>
                            <button className="btn"><span className="badge bg-danger rounded-pill">X</span></button>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span>Greek salad</span>
                            <span className="badge bg-primary rounded-pill">$123.45</span>
                            <button className="btn"><span className="badge bg-danger rounded-pill">X</span></button>
                        </li>
                    </ul>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <span>Total:</span>
                        <span className="badge bg-primary rounded-pill">$123.45</span>
                        <button className="btn"><span className="badge bg-success rounded-pill text-capitalize">Buy Now</span></button>
                    </div>
                </div>
            </div>
            <BackBtn />
        </div>
    )
}

export { Cart }