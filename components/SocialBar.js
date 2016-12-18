/**
 * Created by danielhollcraft on 12/18/16.
 */
import { style } from 'next/css';
import config from '../site.config'

export default () => (
    <ul className={style(styles.icons)}>
      <li className={style(styles.icon)}>
        <a className={style(styles.link)} href={config.githubProfile}>
          <span className="fa fa-github"/>
        </a>
      </li>
      <li className={style(styles.icon)}>
        <a className={style(styles.link)} href={config.linkedinProfile}>
          <span className="fa fa-linkedin-square" />
        </a>
      </li>
    </ul>
)

const styles = {
  icons: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '2rem',
    padding: '0px 20px 10px'
  },

  link: {
    color: 'black'
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    width: '2.5rem',
    height: '2.5rem',
    margin: '.25rem',
    borderRadius: '50%',
    fontSize: '2rem',
    lineHeight: '2rem',
    textAlign: 'center',
    ':hover': {
      transform: 'scale(1.3)',
      transition: 'all 500ms'
    }
  }
};


