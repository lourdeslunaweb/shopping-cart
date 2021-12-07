import { NavLink } from "react-router-dom"

const BackBtn = () =>{
    return(
        
        <NavLink to="/"><button type="button" className="btn btn-outline-dark btn-sm rounded-pill text-capitalize">Back</button></NavLink>
    )
}

export {BackBtn}