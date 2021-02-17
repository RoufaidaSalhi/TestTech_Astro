import axios from "axios";

const base_API = "http://localhost:4000/app";

class WishlistService {


    AddWishList(name) {
        return axios.post(base_API+"/AddWish",name);
    }
    GetWishlist(){
        return axios.get(base_API+"/ListWishlist");
    }
    GetProductWishTObuy(name_wishlist){
   return axios.get(base_API+"/ListProductsTobye/"+name_wishlist)
    }
    GetProductWishBought(name_wishlist){
        return axios.get(base_API+"/ListProductsBought/"+name_wishlist)
         }
     


}

export default new WishlistService;