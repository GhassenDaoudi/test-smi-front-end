import {
  faCoins,
  faEuro,
  faFileInvoiceDollar,
  faHandHoldingDollar,
  faMoneyBillTrendUp,
  faUserGroup,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './brand.module.css';

type Props = {
  sales: string;
  salesNumber: string;
  infulencersCount: string;
  commission: string;
  infulencersCommision: string;
  soldProductsNumber: string;
};
export default ({
  sales,
  salesNumber,
  infulencersCount,
  commission,
  infulencersCommision,
  soldProductsNumber,
}: Props) => {
  return (
    <div className={styles.container}>
      <Card icon={faEuro} iconColor={'#EF7E3E'} data={sales} title="Sales" />
      <Card
        icon={faCoins}
        iconColor={'#33C1AE'}
        data={salesNumber}
        title="Sales Number"
      />
      <Card
        icon={faUserGroup}
        iconColor={'#6A8EF0'}
        data={infulencersCount}
        title="Influencers"
      />
      <Card
        icon={faHandHoldingDollar}
        iconColor={'#C24C95'}
        data={commission}
        title="Commission"
      />
      <Card
        icon={faMoneyBillTrendUp}
        iconColor={'#645AB2'}
        data={infulencersCommision}
        title="Influencers commission"
      />
      <Card
        icon={faFileInvoiceDollar}
        iconColor={'#13465A'}
        data={soldProductsNumber}
        title="Sold Products number"
      />
    </div>
  );
};

const Card = ({
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
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        maxWidth: '200px',
      }}>
      <FontAwesomeIcon icon={icon} style={{fontSize: 50}} color={iconColor} />
      <div style={{marginLeft: 10, textAlign: 'center'}}>
        <p style={{fontSize: 18, fontWeight: 'bolder'}}>{title}</p>
        <p style={{fontSize: 16}}>{data}</p>
      </div>
    </div>
  );
};
