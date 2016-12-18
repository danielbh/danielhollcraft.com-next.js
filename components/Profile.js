/**
 * Created by danielhollcraft on 12/18/16.
 */
import { style } from 'next/css';
import config from '../site.config'
import SocialBar from './SocialBar';

export default () => (
  <div className={style(styles.wrapper)}>
    <div className={style(styles.profileItems)}>
      <img
        className={style(styles.profileItem, styles.photo)}
        src={config.profilePhoto}
        alt="Profile Photo"
      />
      <h2 className={style(styles.profileItem)}>{config.siteName}</h2>
      <SocialBar/>
    </div>
  </div>
);

const styles = {
  wrapper: {
    width: 250,
    height: 250,
    background: '#eee',
    borderRadius: 4,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  profileItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  photo: {
    marginTop: '10%',
    borderRadius: '50%',
    width: 120,
    height: 120,
    minHeight: 120 // Firefox
  },
  profileItem: {
    display: 'flex',
    alignItems: 'center',
    minWidth: 0, // Firefox
    minHeight: 0, // Firefox
  }
};