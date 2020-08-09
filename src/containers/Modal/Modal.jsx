import React from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import s from './Modal.module.scss'
import Button from '../../components/Button'
import { dismissModal } from '../../redux/actions/app'
import getModalContent from './modes'


const Modal = ({ modalShown, modalMode, closeModal }) => {
    const onClickOutside = event => {
        const { target, currentTarget } = event
        
        if (target === currentTarget) {
            closeModal()
        }
    }

    const [ title, content ] = getModalContent(modalMode)

    return (
        <div className={ cn(s.modal, { [s.shown]: modalShown }) }>
            <div className={ s.fade } onClick={ onClickOutside } >
                <div className={ s.window }>
                    <div className={ s.top }>
                        <h3 className={ s.title_text }>
                            { title }
                        </h3>
                        <Button onClick={ closeModal }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" width="20px" height="20px">
                                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19
                                        0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93
                                        89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28
                                        32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 
                                        44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07
                                        100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28
                                        12.28-32.19 0-44.48L242.72 256z"/>
                            </svg>
                        </Button>
                    </div>
                    <div className={ s.content }>
                        { content }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({
    app: { modalShown, modalMode }
}) => ({
    modalShown,
    modalMode
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(dismissModal())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal)