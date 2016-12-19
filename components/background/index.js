/**
 * Created by danielhollcraft on 12/18/16.
 */
import React, {Component} from 'react'
import {style} from 'next/css'
import config from './particles.config'

class Background extends Component {
  componentDidMount() {
    // TODO: Import particleJS from npm.
    // Imported in Head.js. Particles JS is not built for a universal environment and requires
    // a rewrite to play nice with next.js and npm imports.
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