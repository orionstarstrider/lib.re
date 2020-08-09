import React from 'react'
import { connect } from 'react-redux'
import s from './Header.module.scss'
import Logo from '../../components/Logo'
import AddBookBtn from '../../components/AddBookBtn'
import { showModal } from '../../redux/actions/app'
import { MODE_ADD } from '../Modal/modes'


const Header = ({ addNewBook }) => (
    <header className={ s.header }>
        <Logo />
        <AddBookBtn onClick={ addNewBook } />
    </header>
)

const mapDispatchToProps = dispatch => ({
    addNewBook: () => dispatch(showModal(MODE_ADD))
})

export default connect(
    null,
    mapDispatchToProps
)(Header)