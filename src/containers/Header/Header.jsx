import React from 'react'
import './Header.scss'
import Logo from '../../components/Logo'
import AddBookBtn from '../../components/AddBookBtn'

const addNewBook = () => {
    console.log('new book')
}

const Header = () => (
    <header className='header'>
        <Logo />
        <AddBookBtn onClick={addNewBook} />
    </header>
)

export default Header