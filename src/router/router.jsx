import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import { MainPage } from '../common/layouts/main-page/main-page'
import { AuthProtectedRoutes } from '../features/pages/shop/components/auth/protected-routes/auth-protected-routes'

// Code-splitting por ruta: cada página se descarga al navegar a ella.
const loaders = []
const page = (load, name) => { loaders.push(load); return async () => ({ Component: (await load())[name] }) }

export const router = createBrowserRouter([

    {
        path: "/login",
        lazy: page(() => import('../app/auth/login'), 'Login')
    },

    {
        path: "/",
        Component: MainPage,
        children: [
            {
                index: true,
                lazy: page(() => import('../app/home/home'), 'Home')
            },
            {
                path: "shop",
                lazy: page(() => import('../app/shop/shop'), 'Shop')
            },
            {
                path: "blog",
                lazy: page(() => import('../app/blog/blog'), 'Blog')
            },
            {
                path: "contact",
                lazy: page(() => import('../app/contact/contact'), 'Contact')
            },
            {
                path: "cart",
                lazy: page(() => import('../app/cart/cart'), 'Cart')
            },
            {
                element: <AuthProtectedRoutes />,
                children: [
                    {
                        path: "checkout",
                        lazy: page(() => import('../app/checkout/checkout'), 'Checkout')
                    },

                ]
            },
            {
                path: "products/:productId",
                lazy: page(() => import('../app/details/details'), 'Details')
            },
        ]
    }

])

// Con el navegador en reposo se bajan los chunks restantes (son chicos): navegar no espera red.
;(window.requestIdleCallback ?? setTimeout)(() => loaders.forEach((load) => load()))
