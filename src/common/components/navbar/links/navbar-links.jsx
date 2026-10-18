import React from 'react'
import { NavbarLinksCard } from './navbar-links-card'

export function NavbarLinks({ nav_links }) {
    
    return (

        <ul className="order-3 col-span-2 flex justify-between sm:justify-center sm:gap-15 lg:col-auto lg:order-none lg:gap-10 xl:gap-20">
            {
                nav_links.map(({ id, path, name }) => (
                    <NavbarLinksCard key={id} path={path} name={name}/>
                ))
            }
        </ul>

    )
}
