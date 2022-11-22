/// <reference types="vite/client" />
type IBrand = {
  key: string;
  offerId: string;
  pic: string;
  displayName: string;
};

type IBrandStats = {
  sales: number;
  salesNumber: string;
  influencer: string;
  salesPerCountry: {[key in CountryCode]: number};
  topFiveInfluencers: {
    influencerId: string;
    totalSales: number;
    salesNumber: number;
  }[];
  topTenProducts: {articleId: string; salesNumber: number}[];
};

type IInfulencer = {
  banner: string;
  createdAt: string;
  influencerId: string;
  name: string;
};
