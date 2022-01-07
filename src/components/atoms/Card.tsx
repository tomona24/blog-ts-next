import { FC, ReactNode } from 'react'
import { classNames } from '../../utils/style'

type Props = {
    style?: string;
    children: ReactNode;
}

const Page: FC<Props> = ({ style, children }) => {
    return (
        <div className={classNames('hover:opacity-50 w-full md:w-1/2 lg:w-1/3 h-52 lg:h-72 bg-white text-primary p-4 container mx-auto border-gray-200 rounded-md border ring-1 ring-gray-100')}>
            {children}
        </div>
    )
}

export default Page