import React from 'react'
import s from './Main.module.scss'

const Main = ({ children }) =>
    <main className={ s.main }>
        <h1 className={ s.title }>Lib.re Bookstore</h1>
        { children }
    </main>

export default Main