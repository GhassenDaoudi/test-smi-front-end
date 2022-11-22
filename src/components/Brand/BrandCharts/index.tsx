import countryCodeToName from '../../../utils/countryCodeToName';
import './index.css';

export default ({stats}: {stats: IBrandStats}) => {
  const countryMapData = useMemo(() => {
    const countries = Object.keys(stats.salesPerCountry).map(
      code => (countryCodeToName as any)[code],
    );

    return {countries: countries, sales: Object.values(stats.salesPerCountry)};
  }, [stats.salesPerCountry]);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          flexWrap: 'wrap',
        }}>
        <SaleStats />
        <TopTenProducts topTenProducts={stats.topTenProducts} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          marginTop: 10,
          flexWrap: 'wrap',
        }}>
        <TopFiveInfluencers topFiveInfluencers={stats.topFiveInfluencers} />
        <SalesPerCountry
          countries={countryMapData.countries}
          sales={countryMapData.sales}
        />
      </div>
    </div>
  );
};

import {useMemo} from 'react';
import Plot from 'react-plotly.js';
import {IBrandStats} from '../../../api';
import {useArticles, useInfluencer} from '../../../hooks/api';

const SaleStats = () => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <div className="chart-wrapper">
        <Plot
          data={[
            {
              x: [1, 2, 3, 4],
              y: [0, 2, 3, 5],
              fill: 'tozeroy',
              type: 'scatter',
            },
            {
              x: [1, 2, 3, 4],

              y: [3, 5, 1, 7],

              fill: 'tonexty',

              type: 'scatter',
            },
          ]}
          layout={{title: 'Sales Statistics', height: 400}}
        />
      </div>
    </div>
  );
};

const TopTenProducts = ({
  topTenProducts,
}: {
  topTenProducts: {articleId: string; salesNumber: number}[];
}) => {
  const result = useArticles(topTenProducts.map(article => article.articleId));
  if (result.some(r => r.isLoading)) {
    return <div>...loading</div>;
  }
  if (result.some(r => !r.isSuccess)) {
    return <div>...Error</div>;
  }

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div className="chart-wrapper">
        <Plot
          data={[
            {
              type: 'pie',

              values: topTenProducts.map(article => article.salesNumber),
              textinfo: 'label+value+percent',

              insidetextorientation: 'radial',
            },
          ]}
          layout={{title: 'Top 10 products sold', height: 400}}
        />
      </div>
    </div>
  );
};

const TopFiveInfluencers = ({
  topFiveInfluencers,
}: {
  topFiveInfluencers: {
    influencerId: string;
    totalSales: number;
    salesNumber: number;
  }[];
}) => {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
      }}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          gap: 10,
          flexDirection: 'column',
          marginRight: 30,
          marginLeft: 30,
        }}>
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
const SalesPerCountry = ({
  countries,
  sales,
}: {
  countries: string[];
  sales: number[];
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <div className="chart-wrapper">
        <Plot
          data={[
            {
              type: 'choropleth',

              locationmode: 'country names',

              locations: countries,

              z: sales,

              text: countries,
            },
          ]}
          layout={{
            title: 'Sales number per country',
            height: 400,
            geo: {
              projection: {
                type: 'robinson',
              },
            },
          }}
        />
      </div>
    </div>
  );
};
