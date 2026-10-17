export function OutlineButton({ children, className = '', ...props }) {
    return (
        <button
            className={`border border-black text-black hover:bg-black hover:text-white transition-[background-color,color,transform] duration-150 ease-out cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
