import React from 'react'
import s from './BooksTable.module.scss'
import BookActionBtn from '../../components/BookActionBtn'

const TRow = ({ cols, editBook, removeBook, bookId }) =>
    <tr className={ s.row }>
        { cols.map(
            ([name, value]) => <td className={ s.cell } key={`${name}_${bookId}`}>{ value }</td>
        ) }
        <td className={ s.cell } key={`actions_${ bookId }`}>
            <BookActionBtn type="edit" onClick={ editBook } />
            <BookActionBtn type="remove" onClick={ removeBook } />
        </td>
    </tr>

export default TRow