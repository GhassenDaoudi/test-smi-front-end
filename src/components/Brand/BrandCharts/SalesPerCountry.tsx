import Plot from 'react-plotly.js';

export const SalesPerCountry = ({
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
