/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Icons from "views/examples/Icons.js";



import Login from "views/examples/Login.js";
import Categories from "views/examples/Categories";
import Product from "views/examples/Product";
import CreateCategory from "views/examples/CreateCategory";
import CreateProduct from "views/examples/CreateProduct";
import CategoryDetail from "views/examples/CategoryDetails"
import Users from "./views/examples/Users"
import Payment from "./views/examples/Payment"
import OrderList from "./views/examples/OrderList"
import Help from "./views/examples/HelpScreen"
import ReferDiscount from "./views/examples/referDiscount"

// CreateCategory

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/Categories",
    name: "Categories",
    icon: "ni ni-planet text-blue",
    component: Categories,
    layout: "/admin"
  },
  {
    path: "/crete-category",
    name: "Create Category",
    icon: "ni ni-bullet-list-67 text-red",
    component: CreateCategory,
    layout: "/admin"
  },

  {
    path: "/category-detail",
    name: "Create Detail",
    icon: "ni ni-bullet-list-67 text-red",
    component: CategoryDetail,
    layout: "/admin"
  },

  {
    path: "/Products",
    name: "Products",
    icon: "ni ni-planet text-blue",
    component: Product,
    layout: "/admin"
  },

  {
    path: "/crete-product",
    name: "Create Products",
    icon: "ni ni-bullet-list-67 text-red",
    component: CreateProduct,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-bullet-list-67 text-red",
    component: Users,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "orders",
    icon: "ni ni-bullet-list-67 text-red",
    component: OrderList,
    layout: "/admin"
  },

  {
    path: "/help",
    name: "help",
    icon: "ni ni-bullet-list-67 text-red",
    component: Help,
    layout: "/admin"
  },


  {
    path: "/dicount",
    name: "dicount",
    icon: "ni ni-bullet-list-67 text-red",
    component: ReferDiscount,
    layout: "/admin"
  },
  {
    path: "/payment",
    name: "Payment",
    icon: "ni ni-bullet-list-67 text-red",
    component: Payment,
    layout: "/admin"
  },
  

  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },




  /*** CATEGORY*****************************************************/

  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/index",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Categories,
  //   layout: "/admin"
  // },

  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },


  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
