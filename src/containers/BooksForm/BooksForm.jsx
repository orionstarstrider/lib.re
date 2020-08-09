import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from './BooksForm.module.scss'
import { addBook, modifyBook } from '../../redux/actions/books'
import { dismissModal } from '../../redux/actions/app'
import { getFocusedBookData } from '../../redux/selectors'
import Input from '../../components/Input'
import Button from '../../components/Button'
import booksModel from '../../api'


const BooksForm = ({
    targetBook,
    modify,
    storeNewBook,
    modifyStoredBook,
    closeModal
}) => {
    const { fields } = booksModel
    const initialState = {}
    const inputValFormatters = {}
    const requiredFields = []
    const initialValidity = {}

    fields.forEach(({ name, getFormattedInputVal, required }) => {
        initialState[name] = targetBook[name] ?? ''
        initialValidity[name] = true

        if (getFormattedInputVal) {
            inputValFormatters[name] = getFormattedInputVal
        }

        if (required) {
            requiredFields.push(name)
        }
    })

    const [ formData, updateForm ] = useState(initialState)
    const [ inputValidity, setInputValidity ] = useState(initialValidity)
    const [ error, setError ] = useState()

    const validateInput = (name, value) =>
        requiredFields.includes(name) ? !!value : true

    const updateField = ({ target: input }) => {
        const inputName = input.name
        const formatter = inputValFormatters[inputName]
        const inputVal = formatter ? formatter(input) : input.value
        const isValid = validateInput(inputName, inputVal)

        updateForm({
            ...formData,
            [inputName]: inputVal
        })

        setInputValidity({
            ...inputValidity,
            [inputName]: isValid
        })
    }

    const checkFields = () => {
        const formEntries = Object.entries(formData)
        const updatedFormData = {}
        const updatedValidity = {}
        let fieldsValid = true

        formEntries.forEach(([name, value]) => {
            const inputValid =  validateInput(name, value)

            updatedFormData[name] = value
            updatedValidity[name] = inputValid

            fieldsValid = fieldsValid && inputValid
        })

        updateForm(updatedFormData)
        setInputValidity(updatedValidity)

        return fieldsValid
    }

    const submitData = () => {
        const fieldsValid = checkFields()

        if (fieldsValid) {
            setError('')

            if (modify) {
                modifyStoredBook(formData)
            } else {
                storeNewBook(formData)
            }

            closeModal()
        } else {
            setError('Enter all required fields!')
        }
    } 

    return (
        <>
            { error && <div className={ s.errorBlock }>{ error }</div> }
            { fields.map(({ title, inputType, name, required }) =>
                <Input
                    type={ inputType }
                    label={ title }
                    name={ name }
                    placeholder={ `Enter book ${title}` }
                    value={ targetBook[name] ?? '' }
                    onChange={ updateField }
                    key={ `${name}_input` }
                    valid={ inputValidity[name] }
                    required= { required }
                />)}
            <div className={ s.buttons }>
                <Button classNames={ s.cancelButton } onClick={ closeModal }>Cancel</Button>
                <Button classNames={ s.actionButton } onClick={ submitData }>Save</Button>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    targetBook: getFocusedBookData(state)
})

const mapDispatchToProps = dispatch => ({
    storeNewBook: book => dispatch(addBook(book)),
    modifyStoredBook: book => dispatch(modifyBook(book)),
    closeModal: () => dispatch(dismissModal())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksForm)