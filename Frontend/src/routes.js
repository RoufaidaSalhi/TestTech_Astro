import React from 'react';
import SignIN from './views/pages/SignIn/Signin';
import SignUP from './views/pages/SignUp/Signup';
import AddProduct from './views/Products/Add_product';
import Products from './views/Products/Products';
import ListWish from './views/Wishlists/LIstWish';


const routes = [
  { path: '', exact: true, name: 'Home' },
  { path: '/SignIn', exact: true, name: 'Login Page' ,component: SignIN},
  { path: '/SignUP', exact: true, name: 'RegisterPage' ,component: SignUP},
  { path: '/ListWish', name: 'My wishlists', component: ListWish },
  { path: '/Products', name: 'My Products', component: Products },
  { path: '/Products/AddProduct', name: 'Add product', component: AddProduct },


]

export default routes;
