import React from 'react';

import IBaseButtonProps from '../../core/interfaces/IButtonProps';



const BaseButton: React.FC<IBaseButtonProps> = ({
    className = '',
    onClick,
    children,
    type = 'button',
    disabled = false,
    title = '',
    loading = false,
    onMouseEnter,
    onMouseLeave,
}) => {
    const defaultButtonClasses = `mb-2 mt-2 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none`;

    return (
        <button
            className={`${defaultButtonClasses} ${className} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={onClick}
            type={type}
            disabled={disabled || loading}
            title={title}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {loading ? "Loading..." : children}
        </button>
    )
}

export default BaseButton;
