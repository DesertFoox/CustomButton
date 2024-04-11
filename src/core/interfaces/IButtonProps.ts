interface IBaseButtonProps {
    className?: string,
    onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset",
    disabled?: boolean,
    title?: string,
    loading?: boolean,
    onMouseEnter?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    onMouseLeave?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export default IBaseButtonProps