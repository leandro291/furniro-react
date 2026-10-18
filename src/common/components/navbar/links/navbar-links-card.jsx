import React from 'react'
import { Link } from 'react-router-dom'

export function NavbarLinksCard({ path, name}) {
    return (
        <li className="font-['Poppins'] font-semibold">
            <Link to={path} className="flex min-h-[44px] min-w-[44px] items-center justify-center px-2 text-sm sm:px-3 sm:text-base lg:min-h-0 lg:px-0">
                {name}
            </Link>
        </li>
    )
}
