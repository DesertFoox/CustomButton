import React from 'react';

interface IBaseButtonProps {
    className?: string,
    onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset",
    disabled?: boolean,
    title?: string,
    style?: React.CSSProperties,
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
    style = {},
    loading = false,
    ariaLabel,
    onMouseEnter,
    onMouseLeave,
}) => {
    return (
        <button
            className={`base-button ${className} ${loading ? 'loading' : ''}`}
            onClick={onClick}
            type={type}
            disabled={disabled || loading}
            title={title}
            style={style}
            aria-label={ariaLabel}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {loading ? "Loading..." : children}
        </button>
    )
}

export default BaseButton;
