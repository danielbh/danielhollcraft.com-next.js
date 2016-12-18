/**
 * Created by danielhollcraft on 12/18/16.
 */
import Particles from 'react-particles-js'
import {style} from 'next/css'
import config from './particles.config'

export default () => (
  <div className ={style(styles.wrapper)}>
    <Particles
      params={config}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
    />
  </div>
)


const styles = {
  wrapper: {

  }
}