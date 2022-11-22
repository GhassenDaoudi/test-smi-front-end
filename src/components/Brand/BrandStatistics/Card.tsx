import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './brand.module.css';
export const Card = ({
  title,
  data,
  icon,
  iconColor,
}: {
  title: string;
  data: string;
  icon: IconDefinition;
  iconColor: string;
}) => {
  return (
    <div className={styles.card}>
      <FontAwesomeIcon icon={icon} style={{fontSize: 50}} color={iconColor} />
      <div style={{marginLeft: 10, textAlign: 'center'}}>
        <p style={{fontSize: 18, fontWeight: 'bolder'}}>{title}</p>
        <p style={{fontSize: 16}}>{data}</p>
      </div>
    </div>
  );
};
