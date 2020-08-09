import React from 'react'
import './Main.scss'

const Main = props => (
    <main className="main">
        <h1 className="title">Lib.re Bookstore</h1>
        { props.children }
    </main>
)

export default Main