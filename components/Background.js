/**
 * Created by danielhollcraft on 12/18/16.
 */
import Particles from 'react-particles-js'
import {style} from 'next/css'

export default () => (
  <div className ={style(styles.wrapper)}>
    <Particles
      params={{
        particles: {
          number: {
            value: 50
          },
          line_linked: {
            shadow: {
              enable: false,
              color: "#3CA9D1",
              blur: 5
            }
          }
        }
      }}
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