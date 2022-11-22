import Plot from 'react-plotly.js';
import styles from './styles.module.css';
export const SaleStats = () => {
  return (
    <div className={styles.salesContainer}>
      <div className={styles.chartWrapper}>
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
