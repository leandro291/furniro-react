import React from 'react'
import { Navbar } from '../../components/navbar/navbar'
import { Footer } from '../../components/footer/footer'
import { Outlet, useLocation } from 'react-router-dom'

const SITE = 'https://furniro-react-ecommerce.vercel.app'

export function MainPage() {

    const { pathname } = useLocation()

    return (
        <div className='w-full min-h-screen grid grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr_500px] bg-slate-50'>
            <link rel="canonical" href={SITE + (pathname === '/' ? '' : pathname)} />
            <Navbar />

            <main className='w-full min-h-screen container mx-auto bg-white'>
                <Outlet />
            </main>

            <Footer />
        </div>

    )
}
