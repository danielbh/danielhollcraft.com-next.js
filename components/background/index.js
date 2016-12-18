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
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
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