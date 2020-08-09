import React from 'react'
import s from './AddBookBtn.module.scss'

const AddBookBtn = ({ onClick }) =>
    <button className={ s.addBookBtn } onClick={onClick}>
        <span className={ s.plus }>+</span>
        <span>Add new book</span>
    </button>

export default AddBookBtn
