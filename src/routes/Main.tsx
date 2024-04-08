import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Films } from "../containers/Films";
import { TVShows } from "../containers/TVShows";
import { People } from "../containers/People";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Films />,
                errorElement: <NotFound />
            },
            {
                path: "/shows",
                element: <TVShows />,
                errorElement: <NotFound />
            },
            {
                path: "/people",
                element: <People />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


