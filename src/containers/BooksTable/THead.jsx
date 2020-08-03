import React from 'react'

const THead = ({ cols }) => (
    <tr className="books_table__head books_table__row">
        { cols.map(([title, name]) => <th className="books_table__cell" key={ name }>{ title }</th>) }
        <th className="books_table__cell books_table__actions_col" key="actions">Actions</th>
    </tr>
)

export default THead