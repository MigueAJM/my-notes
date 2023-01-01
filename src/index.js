import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './resources/css/variables.css'
import './resources/css/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Main } from './pages/main'
import { Error } from './pages/error.page'
import { Welcome } from './pages/welcome'

const router = createBrowserRouter([
    {
        path: '/my-notes/',
        element: <Main component={<Welcome/>}/>,
        errorElement: <Main component={<Error/>}/>,
    },
    {
        path: '/my-notes/notes',
        element: <Main component={<Error/>}></Main>,
        errorElement: <Main component={<Error/>}/>
    },
    {
        path: '/my-notes/projects',
        element: <Main component={<Error/>}></Main>,
        errorElement: <Main component={<Error/>}/>,
    },
    {
        path: '/my-notes/*',
        element: <Main component={<Error/>}/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
