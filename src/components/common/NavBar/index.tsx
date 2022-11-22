import {
  faLineChart,
  faRightFromBracket,
  faUserGroup,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ShopMyInfluenceLogo from '../../../assets/logo.png';
import styles from './navBar.module.css';

export default () => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 30,
        width: '230px',
        height: '100vh',
      }}>
      <img
        src={ShopMyInfluenceLogo}
        width={120}
        style={{alignSelf: 'center'}}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          marginRight: 20,
          marginTop: 20,
        }}>
        <div className={`${styles.link} ${styles.active}`}>
          <FontAwesomeIcon icon={faLineChart} />
          Dashboard
        </div>

        <div className={`${styles.link}`}>
          <FontAwesomeIcon icon={faUserGroup} />
          Influencers
        </div>
        <div className={`${styles.link}`}>
          <FontAwesomeIcon icon={faChartLine} />
          Statistics
        </div>
        <div className={`${styles.link} ${styles.logoutBtn}`}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          Log out
        </div>
      </div>
    </div>
  );
};
