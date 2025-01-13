import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Articles from "./pages/articles.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>,
    },
    {
        path: '/dashboard',
        element: <Articles/>,
    },
    {
        path: '*',
        element: <Login/>,
    },
]);

const RouteList = () => {
    return <RouterProvider router={router}/>;
};

export default RouteList;