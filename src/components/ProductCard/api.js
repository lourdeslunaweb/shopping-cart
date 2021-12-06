import { api } from "../../utils/axios"

const getProducts = async () =>{
    const response = await api.get("/products");
    return response
}

export {getProducts}
