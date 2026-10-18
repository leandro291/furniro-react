import React from 'react'
import logo from "../../assets/common/logo.svg"
import { Link } from 'react-router-dom'

export function Logo() {
    return (
        <Link to={"/"} className="flex min-h-[44px] items-center gap-2">
            <img className="w-9 h-6 sm:w-12 sm:h-8" src={logo} alt="" />
            <span className="font-bold text-xl sm:text-3xl lg:text-4xl">Furniro</span>
        </Link>
    )
}
