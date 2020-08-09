import React from 'react'
import { Link } from "react-router-dom";
import s from'./Logo.module.scss'

const Logo = () =>
    <div className={ s.logo }>
        <Link to="/" title="Lib.re Bookstore">
            LIB
            <span className={ s.suffix }>.RE</span>
        </Link>
    </div>

export default Logo