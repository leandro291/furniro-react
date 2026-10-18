import React from 'react'
import { Link } from 'react-router-dom'

export function FooterLinksCard({ path, name }) {
    return (
        <li className='font-bold cursor-pointer text-center'>
            <Link to={path} className="flex min-h-[44px] items-center justify-center lg:min-h-0">{name}</Link>
        </li>
    )
}
