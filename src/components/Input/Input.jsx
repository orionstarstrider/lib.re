import React, { useState } from 'react'
import cn from 'classnames'
import s from './Input.module.scss'

const Input = ({ type, label, placeholder, name, value, onChange, valid, required }) => {
    const [ _value, setValue ] = useState(value)

    const [ isFocused, setFocus ] = useState(false)

    const handleInput = ({ target: { value } }) => setValue(value)

    const handleCheck = ({ target: { checked } }) => setValue(checked)

    const isCheckbox = type === 'checkbox'

    const handleChange = event => {
        onChange(event)

        if (isCheckbox) {
            handleCheck(event)
        } else {
            handleInput(event)
        }
    }

    const coreProps = {
        type,
        name,
        className: s.input,
        onChange: handleChange,
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
    }

    return (
        <label className={ cn(s.label, { [s.checkbox]: isCheckbox }, { [s.focused]: isFocused }, { [s.invalid]: !valid }) } >
            { label }
            { required && ' *' }
            { isCheckbox
                ? <input checked={ _value } { ...coreProps } />
                : <input value={ _value } placeholder={ placeholder } { ...coreProps } />
            }
        </label>
    )
}

export default Input