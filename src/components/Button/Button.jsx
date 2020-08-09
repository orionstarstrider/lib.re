import React from 'react'
import cn from 'classnames'
import s from './Button.module.scss'

const Button = ({ children, onClick, classNames }) => (
    <button className={cn(s.button, classNames)} onClick={ onClick }>
        {children}
    </button>
)

export default Button