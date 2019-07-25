import React from 'react'
import PropTypes from 'prop-types'
import Plyr from 'react-plyr';
import logo from '../images/Koin_logo2018_white.png'
import '../assets/css/vimeo.css'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">            
            <img src={logo} className="logo" alt="koinoia davis logo"></img>
        </div>
        <div className="content">
            <div className="inner">
                <h1>New Student Welcome Night</h1>
                <div class='embed-container'><iframe src='https://player.vimeo.com/video/98941401' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
                <p>Check out the trailer!</p>            
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
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
