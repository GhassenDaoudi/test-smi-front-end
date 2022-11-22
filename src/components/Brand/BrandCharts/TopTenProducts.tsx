import Plot from 'react-plotly.js';
import {useArticles} from '../../../hooks/api';

import styles from './styles.module.css';

export const TopTenProducts = ({
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
    <div className={styles.top10productContainer}>
      <div className={styles.chartWrapper}>
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
