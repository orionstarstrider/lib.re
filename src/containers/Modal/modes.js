import React from 'react'
import BooksForm from '../BooksForm'
import ConfirmRemove from '../ConfirmRemove'

export const MODE_ADD = 'MODE_ADD'
export const MODE_EDIT = 'MODE_EDIT'
export const MODE_DELETE = 'MODE_DELETE'

const getModalContent = mode => {
    switch (mode) {
        case MODE_ADD: {
            return [ 'Add book', <BooksForm /> ]
        }
        case MODE_EDIT: {
            return [ 'Modify book', <BooksForm modify /> ]
        }
        case MODE_DELETE: {
            return [ 'Delete book', <ConfirmRemove /> ]
        }
        default: {
            return [ '', '' ]
        }
    }
}

export default getModalContent