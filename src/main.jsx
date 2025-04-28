import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {Home} from "./components/Home.jsx";
import {Users} from "./components/Users.jsx";
import {UserDetails} from "./components/UserDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children:[
            {
                path:"/users",
                loader:()=>fetch('details.json'),
                //loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
                element:<Users></Users>
            },
            {
                path: "/user/:userId",
                loader: async ({ params }) => {
                    const res = await fetch('details.json');
                    const users = await res.json();
                    return users.find(user => user.id === Number(params.userId));
                },
                element: <UserDetails></UserDetails>
            },
            {
                path:"/contact",
                element:<Users></Users>
            },


        ]
    },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
