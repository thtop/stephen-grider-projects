import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="ui header blue item">
                <i className="circular middle aligned icon video green" />
                <div className="ui content blue">
                    <div className="ui header green">Streamy</div>
                </div>
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
                <div className="item">
                    <GoogleAuth />
                </div>
            </div>
        </div>
    )
}

export default Header

