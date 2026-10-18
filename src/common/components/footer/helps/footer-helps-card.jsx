import React from 'react'
import { Link } from 'react-router-dom'

export function FooterHelpsCard({ name, path }) {
    return (
        <li className="font-['Poppins'] font-semibold text-center lg:text-now">
            <Link to={path} className="flex min-h-[44px] items-center justify-center lg:min-h-0">{name}</Link>
        </li>               
    )
}
