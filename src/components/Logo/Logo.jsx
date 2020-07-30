import React from 'react'
import { Link } from "react-router-dom";
import './Logo.scss'

const Logo = () => (
    <div className='logo'>
        <Link to="/" title="Lib.re Bookstore">
            LIB
            <span className="logo__suffix">.RE</span>
        </Link>
    </div>
)

export default Logo