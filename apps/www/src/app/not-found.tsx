import { sora } from '@/lib/fonts'
import * as React from 'react'

export default function Error() : React.JSX.Element {
    return (
        <div className='flex justify-center items-center h-screen'>
            <h1 className={`${sora.className}`}>404 - Page Not Found</h1>
        </div>
    )
}