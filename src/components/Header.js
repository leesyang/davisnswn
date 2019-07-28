import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/Koin_logo2018_white.png'
import nswnFlyer from '../images/nswn2019.png'
import '../assets/css/vimeo.css'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">            
            <img src={logo} className="logo" alt="koinoia davis nswn logo"></img>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Coming soon...</h1>
                <img src={nswnFlyer}></img>
                <p>Check out the trailer!</p>            
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('koin')}}>Koin</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
