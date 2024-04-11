import React from 'react';

import IBaseButtonProps from '../../../core/interfaces/IButtonProps';
import ButtonVariant from '../../../core/types/color.type';

import BaseButton from '../baseButton';

interface IColorifiedButtonProps extends IBaseButtonProps {
    variant: ButtonVariant;
}

const ColorifiedButton: React.FC<IColorifiedButtonProps> = ({
    variant,
    className = '',
    ...props
}) => {
    const baseClasses = 'px-2 py-2 text-md';

    const variantClasses = {
        primary: `bg-blue-500 hover:bg-blue-700 text-white ${baseClasses}`,
        danger: `bg-red-500 hover:bg-red-700 text-white ${baseClasses}`,
        secondary: `bg-gray-600 hover:bg-gray-800 text-white ${baseClasses}`,
        success: `bg-green-500 hover:bg-green-700 text-white ${baseClasses}`,
        info: `bg-teal-500 hover:bg-teal-700 text-white ${baseClasses}`,
        warning: `bg-yellow-500 hover:bg-yellow-600 text-white ${baseClasses}`,
        light: `bg-gray-100 hover:bg-gray-200 text-gray-800 ${baseClasses}`,
        custom: `${className} ${baseClasses}`,
    };

    const combinedClasses = `${variantClasses[variant]} ${className}`;
    return <BaseButton {...props} className={combinedClasses} />;
};

export const PrimaryButton = (props: Omit<IColorifiedButtonProps, 'variant'>) => (
    <ColorifiedButton {...props} variant="primary" />
);

export const DangerButton = (props: Omit<IColorifiedButtonProps, 'variant'>) => (
    <ColorifiedButton {...props} variant="danger" />
);

export const CustomButton = (props: IColorifiedButtonProps) => (
    <ColorifiedButton {...props} variant="custom" />
);
export const SecondaryButton = (props: Omit<IColorifiedButtonProps, 'variant'>) => (
    <ColorifiedButton {...props} variant="secondary" />
);

export const SuccessButton = (props: Omit<IColorifiedButtonProps, 'variant'>) => (
    <ColorifiedButton {...props} variant="success" />
);

export const InfoButton = (props: Omit<IColorifiedButtonProps, 'variant'>) => (
    <ColorifiedButton {...props} variant="info" />
);

export const WarningButton = (props: Omit<IColorifiedButtonProps, 'variant'>) => (
    <ColorifiedButton {...props} variant="warning" />
);

export const LightButton = (props: Omit<IColorifiedButtonProps, 'variant'>) => (
    <ColorifiedButton {...props} variant="light" />
);

export default {
    Primary: PrimaryButton,
    Danger: DangerButton,
    Custom: CustomButton,
    Secondary: SecondaryButton,
    Success: SuccessButton,
    Info: InfoButton,
    Warning: WarningButton,
    Light: LightButton,
};
