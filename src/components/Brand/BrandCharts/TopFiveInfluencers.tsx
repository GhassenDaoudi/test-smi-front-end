import {useInfluencer} from '../../../hooks/api';
import styles from './styles.module.css';
const TableHeader = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
      }}>
      <div style={{flex: 1}}>Top 5 Influencers</div>
      <div style={{flex: 1}}>Sales</div>
      <div style={{flex: 1}}>salesNumber</div>
    </div>
  );
};
const TableRow = ({
  influencerId,
  sales,
  salesNumber,
}: {
  influencerId: string;
  sales: number;
  salesNumber: number;
}) => {
  const {data, isLoading, isSuccess} = useInfluencer(influencerId);

  if (isLoading) {
    return <div>...loading</div>;
  }
  if (!isSuccess) {
    return <div>...Error</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        padding: 5,
      }}>
      <div style={{flex: 1}}>{data.name}</div>
      <div style={{flex: 1}}>{sales}</div>
      <div style={{flex: 1}}>{salesNumber}</div>
    </div>
  );
};
export const TopFiveInfluencers = ({
  topFiveInfluencers,
}: {
  topFiveInfluencers: {
    influencerId: string;
    totalSales: number;
    salesNumber: number;
  }[];
}) => {
  return (
    <div className={styles.top5InfContainer}>
      <div className={styles.top5InfWrapper}>
        <TableHeader />
        {topFiveInfluencers.map((item, index) => (
          <TableRow
            key={item.influencerId}
            influencerId={item.influencerId}
            sales={item.totalSales}
            salesNumber={item.salesNumber}
          />
        ))}
      </div>
    </div>
  );
};
