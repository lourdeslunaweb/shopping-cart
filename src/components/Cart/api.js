import { api } from "../../utils/axios"

const buyProducts = async (arrayProducts) => {
    await api.post("/sales/", arrayProducts);
}

export { buyProducts }




