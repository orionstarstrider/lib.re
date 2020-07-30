import React from 'react'
import './Container.scss'

const Container = props => (
    <div className='container'>
        { props.children }
    </div>
)

export default Container