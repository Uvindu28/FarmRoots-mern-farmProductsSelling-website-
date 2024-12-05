import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import SellerShop from '../SellerPages/SellerShop.jsx'
import Buyer from '../pages/Buyer';
import SellerProfile from '../SellerPages/SellerProfile.jsx'

const routes = createBrowserRouter([

    {
        path:"/",
        element:<App/>,       
    },
    {
        path:"signup",
        element:<SignUp/>
    },
    {
        path:"login",
        element:(
        <Login/>
    )
    },
    {
        path:"shop",
        element:<SellerShop/>,  
    },
    {
        path:"buyer",
        element:<Buyer/>,  
    },{
        path:"sellerprofile",
        element:<SellerProfile/>,
    }
])

export default routes;