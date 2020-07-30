import React from 'react'
import './AddBookBtn.scss'

const AddBookBtn = props => {
    const { onClick } = props

    return (
        <button className='add_book_btn' onClick={onClick}>
            <span className="add_book_btn__plus">+</span>
            <span className="add_book_btn__text">Add new book</span>
        </button>
    )
}

export default AddBookBtn
