import { style } from 'next/css';
import Head from '../components/Head';
import Background from '../components/Background';
import Profile from '../components/Profile';

export default () => (
  <div>
    <Head/>
    <div className={style(styles.wrapper)}>
      <Background/>
      <Profile/>
    </div>
  </div>

)

const styles = {
  wrapper: {
    margin: 0,
    paddingTop: "10%",
    display: 'flex',
    justifyContent: 'center',
    background: "#2e3250",
    height: '100vh',
    width: '100vw',
    lineHeight: '100vh',
    textAlign: 'center'
  },
};