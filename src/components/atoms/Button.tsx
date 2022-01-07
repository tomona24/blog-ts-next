import React, { useState } from 'react';
import { classNames } from '../../utils/style'

type Props = {
    text: string;
    onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const Button: React.FC<Props> = ({text, onClick
}) => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <button className={classNames(
            isVisible
            ? "visible opacity-100"
            : "invisible opacity-0",
            "shadow-lg py-2 px-4 rounded-md bg-primary text-white font-semibold hover:bg-primary-dark hover:shadow-md transform transition")}
        onClick={() => onclick}
        >
            {text}
        </button>
    )
};