import React from 'react';

interface IBaseButtonProps {
    className?: string,
    onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset",
    disabled?: boolean,
    title?: string,
    loading?: boolean,
    ariaLabel?: string,
    onMouseEnter?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    onMouseLeave?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

const BaseButton: React.FC<IBaseButtonProps> = ({
    className = '',
    onClick,
    children,
    type = 'button',
    disabled = false,
    title = '',
    loading = false,
    ariaLabel,
    onMouseEnter,
    onMouseLeave,
}) => {
    const defaultButtonClasses = `inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none`;

    return (
        <button
            className={`${defaultButtonClasses} ${className} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={onClick}
            type={type}
            disabled={disabled || loading}
            title={title}
            aria-label={ariaLabel}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {loading ? "Loading..." : children}
        </button>
    )
}

export default BaseButton;
