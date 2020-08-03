import React from 'react'
import BookActionBtn from '../../components/BookActionBtn'

const TRow = ({ cols, editBook, removeBook, bookId }) =>
    <tr className="books_table__row">
        { cols.map(
            ([name, value]) => <td className="books_table__cell" key={`${name}_${bookId}`}>{ value }</td>
        ) }
        <td className="books_table__cell" key={`actions_${ bookId }`}>
            <BookActionBtn type="edit" onClick={ editBook } />
            <BookActionBtn type="remove" onClick={ removeBook } />
        </td>
    </tr>

export default TRow