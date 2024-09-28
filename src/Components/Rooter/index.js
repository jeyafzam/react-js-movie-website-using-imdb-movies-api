import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import SingleMovie from "../../Pages/SingleMovie";
import Search from  "../../Pages/Search";

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
            {
                path:"/search",
                element:<Search/>,
            },

        ])
        return (<RouterProvider router={routes}/>)
    }