import React from 'react'
import { connect } from 'react-redux'
import s from './ConfirmRemove.module.scss'
import { dismissModal } from '../../redux/actions/app'
import { removeBook } from '../../redux/actions/books'
import Button from '../../components/Button'
import { getFocusedBookData } from '../../redux/selectors'


const ConfirmRemove = ({ targetBook: { id }, removeStoredBook, closeModal }) => {
    const removeBook = () => { 
        removeStoredBook(id)
        closeModal()
    }

    return (
        <>
            <div className={ s.text }>Remove book { id }?</div>
            <div className={ s.buttons }>
                <Button classNames={ s.cancelButton } onClick={ closeModal }>No</Button>
                <Button classNames={ s.actionButton } onClick={ removeBook }>Yes</Button>
            </div>
        </>
    )
}


const mapStateToProps = state => ({
    targetBook: getFocusedBookData(state)
})

const mapDispatchToProps = dispatch => ({
    removeStoredBook: book => dispatch(removeBook(book)),
    closeModal: () => dispatch(dismissModal())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmRemove)