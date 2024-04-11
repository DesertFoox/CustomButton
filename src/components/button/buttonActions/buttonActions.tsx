import React from 'react';
import { PrimaryButton, DangerButton, SecondaryButton } from '../colorifiedButtons/colorifiedButtons';

interface ButtonActionsProps {
    onSave: () => void;
    onCancel: () => void;
    onDelete?: () => void;
}

const ButtonActions: React.FC<ButtonActionsProps> = ({ onSave, onCancel, onDelete }) => {

    return (
        <div className="flex justify-end space-x-4">
            {onDelete && (
                <DangerButton onClick={onDelete}>Delete</DangerButton>
            )}
            <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
            <PrimaryButton onClick={onSave}>Save</PrimaryButton>
        </div>
    );
}

export default ButtonActions;
