import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import './index.css';
import NotFoundPage from "./pages/NotFoundPage.tsx";
import PostPage from "./pages/PostPage.tsx";
import NavBar from "./components/NavBar.tsx";
import CommentPage from "./pages/CommentPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import AskPage from "./pages/AskPage.tsx";
import Layout from "./components/Layout.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '*',
                element: <NotFoundPage />,
            },
            {
                path: '/',
                element: <PostPage />,
            },
            {
                path: "/ask",
                element: <AskPage />,
            },
            {
                path: "/comments/:story_id",
                element: <CommentPage />
            },
            {
                path: "/user/:user",
                element: <ProfilePage />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    //     <RouterProvider router={router} />
    // </React.StrictMode>,

    <RouterProvider router={router} />
);