import React from 'react'
import cn from 'classnames'
import s from './BooksTable.module.scss'

const THead = ({ cols }) => 
    <tr className={ cn(s.head, s.row) }>
        { cols.map(([title, name]) => <th className={ s.cell } key={ name }>{ title }</th>) }
        <th className={ cn(s.cell, s.actionsCol) } key="actions">Actions</th>
    </tr>

export default THead