import {useMemo} from 'react';
import countryCodeToName from '../../../utils/countryCodeToName';
import {SalesPerCountry} from './SalesPerCountry';
import {SaleStats} from './SaleStats';
import styles from './styles.module.css';
import {TopFiveInfluencers} from './TopFiveInfluencers';
import {TopTenProducts} from './TopTenProducts';
export default ({stats}: {stats: IBrandStats}) => {
  const countryMapData = useMemo(() => {
    const countries = Object.keys(stats.salesPerCountry).map(
      code => (countryCodeToName as any)[code],
    );

    return {countries: countries, sales: Object.values(stats.salesPerCountry)};
  }, [stats.salesPerCountry]);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <SaleStats />
        <TopTenProducts topTenProducts={stats.topTenProducts} />
      </div>
      <div className={styles.row} style={{marginTop: 10}}>
        <TopFiveInfluencers topFiveInfluencers={stats.topFiveInfluencers} />
        <SalesPerCountry
          countries={countryMapData.countries}
          sales={countryMapData.sales}
        />
      </div>
    </div>
  );
};
