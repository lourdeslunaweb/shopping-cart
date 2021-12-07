import { BackBtn } from ".."

const EmptyCart = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center flex-column mb-5">
            <div className="card border-primary mb-3 mt-5 shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '20rem' }}>
                <div className="card-header d-flex">
                    <span className="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="125" height="25" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg></span>
                    <h5>My Cart</h5>
                </div>
                <div className="card-body">
                    <h4 className="card-title text-capitalize">Your Cart Is Empty</h4>
                </div>
            </div>
            <BackBtn/>
        </div>
    )
}

export { EmptyCart }