import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import SingleMovie from "../../Pages/SingleMovie";

export default function MyRouter(){
    
        const routes=createBrowserRouter([

            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/movie/:MovieId",
                element:<SingleMovie/>
            },

        ])
        return (<RouterProvider router={routes}/>)
    }