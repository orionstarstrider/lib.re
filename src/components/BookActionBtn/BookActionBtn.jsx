import React from 'react'
import cn from 'classnames'
import s from './BookActionBtn.module.scss'
import Button from '../Button'

const BookActionBtn = ({ type, onClick }) => {
    const iconSize = '1em'

    if (type === 'edit') {
        return (
            <Button classNames={ cn(s.book_action_btn, s.edit) } onClick={ onClick }>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
                    x="0" y="0" width={iconSize} height={iconSize}
                    viewBox="0 0 528.899 528.899"
                >
                    <g>
                        <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z
                            M518.113,63.177l-47.981-47.981
                            c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
                            C532.495,100.753,532.495,77.559,518.113,63.177z
                            M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
                            L27.473,390.597L0.3,512.69z"/>
                    </g>
                </svg>
            </Button>
        )
    }

    return (
        <Button classNames={ cn(s.book_action_btn, s.remove) } onClick={ onClick }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" width={iconSize} height={iconSize}>
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19
                        0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93
                        89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28
                        32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 
                        44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07
                        100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28
                        12.28-32.19 0-44.48L242.72 256z"/>
                </svg>
        </Button>
    )
}

export default BookActionBtn