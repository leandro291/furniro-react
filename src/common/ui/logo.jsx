import React from 'react'
import logo from "../../assets/common/logo.svg"
import { Link } from 'react-router-dom'

export function Logo() {
    return (
        <Link to={"/"} className="flex items-center gap-2">
            <img className="w-12 h-8" src={logo} alt="" />
            <span className="font-bold text-4xl">Furniro</span>
        </Link>
    )
}
