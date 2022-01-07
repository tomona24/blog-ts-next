import { FC, ReactNode, useState } from 'react'
import { classNames } from '../../utils/style'

type Props = {
    style?: string;
    children?: ReactNode;
}

const Icon: FC<Props> = ({ style, children }) => {
    const [isVisible, setISVisible] = useState(true);

    return (
        <div className={classNames(
                isVisible
                ? "visible opacity-100"
                : "invisible opacity-0",
                'hover:bg-primary hover:text-white p-1 m-1 flex items-center border-gray-200 rounded-full border  w-10 h-10'
            )}>
            {children}
        </div>
    )
}

export default Icon