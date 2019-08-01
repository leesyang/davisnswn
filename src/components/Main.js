import React from 'react'
import PropTypes from 'prop-types'
import { getFirebase } from '../../gatsby-firebase.js'

import watertower from '../images/watertower.jpg'
import nswngroup from '../images/nswngroup.jpg'
import koingroup from '../images/koingroup.jpg'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firebase: null
    };
  }  

  componentDidMount() {
    const lazyApp = import('firebase/app')
    const lazyDatabase = import('firebase/database')

    Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
      const database = getFirebase(firebase).database()
      // do something with `database` here,
      // or store it as an instance variable or in state
      // to do stuff with it later
      this.setState({ firebase: database });
    })
  }

  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={watertower} alt="water tower" /></span>
          <p>Welcome to UC Davis! Your college years will be one of the most important times in your life.
          Some people mistakenly think it's just a time to get a good career. Work hard, earn the grades, get out and get on with the career of your dreams.
          But don't be mistaken, college is about so much more than just a job in the future.
          It is a place to actually find who you are. Ask deeper questions about life and meaning and purpose.
          It's a time to make life long friends. And life long memories.
          How your college years go can affect the rest of your life.</p>          
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={nswngroup} alt="people at nswn" /></span>
          <p>New Student Welcome Night is the go-to event on the UC Davis campus. With videos, a skit, a thought-provoking talk, and free Korean BBQ (yes—free!), it’s an unforgettable night to start off the new school year. Invite your friends and hope to see you there! NSWN is sponsored by Koinonia Christian Fellowship, a group that meets weekly on campus.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'koin' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Koinonia</h2>
          <span className="image main"><img src={koingroup} alt="koinonia group photo" /></span>
          <p>What is Koinonia? It is the greek word for "fellowship" from the passing in Acts 2:42. For many of us, college was a transformative time: Jesus’ all-consuming call grabbed a hold of our hearts as we experienced the richness of life within a biblical, counter-cultural Christian community. It’s an experience and a vision we want to pass on to others—an Acts 2 church in every college town. And so, we focus on college ministry, plant churches in college towns, and encourage every one of our members to live in loving, sacrificial service and ministry. At Koinonia Davis, you'll find a space to seek Jesus seriously, make life-long friendships, and discover your life's purpose according to God's Word. Come check us out! <span><a href="http://www.koinoniadavis.org/">@Koinonia Davis</a></span></p>          
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main