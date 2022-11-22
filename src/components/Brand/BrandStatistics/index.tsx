import {
  faCoins,
  faEuro,
  faFileInvoiceDollar,
  faHandHoldingDollar,
  faMoneyBillTrendUp,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import styles from './brand.module.css';
import {Card} from './Card';

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
