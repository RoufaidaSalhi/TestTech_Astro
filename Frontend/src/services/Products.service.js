import axios from "axios";

const base_API = "http://localhost:4000/app";

class ProductService {


    AddProduct(Product) {
        return axios.post(base_API+"/AddProduct",Product);
    }
    GetProduct(nameproduct){
        return axios.get(base_API+"/DetailsProduct/"+nameproduct);
    }
    GetAllPrducts(){
        return axios.get(base_API+"/ListProducts")
    }


}

export default new ProductService;