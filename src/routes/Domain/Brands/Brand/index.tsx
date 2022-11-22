import {useParams} from 'react-router-dom';
import {IBrand} from '../../../../api';
import BrandCharts from '../../../../components/Brand/BrandCharts';
import BrandStatistics from '../../../../components/Brand/BrandStatistics';
import TopMenu from '../../../../components/common/TopMenu';
import {useBrand, useBrandStats} from '../../../../hooks/api';
import './styles.module.css';
export default () => {
  const {brandId} = useParams() as {brandId: string};
  const {data, isLoading, isSuccess} = useBrand(brandId);
  if (isLoading) {
    return <div>...Loading</div>;
  }
  if (!isSuccess) {
    return <div>...Failed to load Brand</div>;
  }

  return (
    <div className="container">
      <TopMenu brand={data} />
      <DashBoardWrapper offerId={brandId} />
    </div>
  );
};

const DashBoardWrapper = ({offerId}: {offerId: string}) => {
  const {data, isLoading, isSuccess} = useBrandStats(offerId);
  if (isLoading) {
    return <div>... loading stats</div>;
  }
  if (!isSuccess) {
    return <div>Failed to Load Stats</div>;
  }
  return (
    <>
      <BrandStatistics
        commission={'1000'}
        infulencersCommision="aaa"
        infulencersCount={data.influencer}
        soldProductsNumber={'data.salesNumber'}
        sales={`${data.sales.toFixed(2)}€`}
        salesNumber={data.salesNumber}
      />
      <BrandCharts stats={data} />
    </>
  );
};
