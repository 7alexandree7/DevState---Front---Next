interface IconButtonProps {
    children?: React.ReactNode;
}


export function IconButton({ children }: IconButtonProps) {

    return (
        <button
            className=" bg-gray-500 text-blue p-1.5 rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300">
            {children}
        </button>
    )
}