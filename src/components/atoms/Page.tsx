import { FC, ReactNode } from 'react'
import { classNames } from '../../utils/style'

type Props = {
    style?: string;
    children: ReactNode;
    width?: string;
    height?: string;
}

const Page: FC<Props> = ({ style, children }) => {
    return (
        <div className='bg-white text-primary p-6 container mx-auto border-gray-200 rounded-md border ring-1 ring-gray-100'>
            {children}
        </div>
    )
}

export default Page