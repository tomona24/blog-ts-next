import {FC, ReactNode} from 'react'
import { classNames } from '../utils/style'

type Props = {　
    style: string
    children: ReactNode
}

const LayoutMain: FC<Props> = ({style, children}) => {
    return <div className='bg-primary text-white'>{children}</div>
}

export default LayoutMain