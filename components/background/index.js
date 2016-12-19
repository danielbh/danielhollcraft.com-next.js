/**
 * Created by danielhollcraft on 12/18/16.
 */
import React, {Component} from 'react'
import {style} from 'next/css'
import config from './particles.config'

class Background extends Component {
  componentDidMount() {

    // Daniel, you should be able to import this from npm as you mentioned 
    // does this exist in npm? is it throwing an error when used this way?
    particlesJS('particle', config);
  }
  render() {
    return (
      <div id="particle" className={style(styles.wrapper)}></div>
    )
  }
}

const styles = {
  wrapper: {
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%"
  }
}

export default Background
