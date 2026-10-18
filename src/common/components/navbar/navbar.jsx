import React from 'react'
import { Logo } from '../../ui/logo'
import { NavbarLinks } from './links/navbar-links'
import { NAV_LINKS } from '../../shared/navigation/navigation'
import { NavbarIconCart } from './icon/navbar-icon-cart'
import { NavbarIconUser } from './icon/navbar-icon-user'

export function Navbar() {
    return (
        <header className='mx-auto container '>
            <div className="container lg:min-h-25 bg-white grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 px-3 sm:px-4 py-2 lg:flex lg:flex-row lg:justify-between lg:gap-0 lg:px-24 lg:py-6 sticky top-0 z-10 border-b border-b-gray-900/20 shadow-sm">

                <Logo  />

                <NavbarLinks nav_links={NAV_LINKS} />
                <ul className='order-2 justify-self-end flex items-center gap-1 sm:gap-5 lg:gap-10 xl:gap-15'>
                    <NavbarIconUser />
                    <NavbarIconCart />
                </ul>

            </div>
        </header>
    )
}
