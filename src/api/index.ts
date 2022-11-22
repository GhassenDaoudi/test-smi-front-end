import countryCodeToName from '../utils/countryCodeToName';

export type IBrand = {
  key: string;
  offerId: string;
  pic: string;
  displayName: string;
};

type CountryCode = keyof typeof countryCodeToName;
export type IBrandStats = {
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
const getBrandById = (id: string): Promise<IBrand> => {
  const url = `http://localhost:3000/brand/${id}`;
  return fetch(url).then(res => res.json());
};

const getBrandStatsByOfferId = (id: string): Promise<IBrandStats> => {
  const url = `http://localhost:3000/brand/stats/${id}`;
  return fetch(url).then(res => res.json());
};

type IInfulencer = {
  banner: string;
  createdAt: string;
  influencerId: string;
  name: string;
};

const getInfluencerById = (id: string): Promise<IInfulencer> => {
  const url = `http://localhost:3000/influencer/${id}`;
  return fetch(url).then(res => res.json());
};

const getArticleById = (id: string) => {
  const url = `http://localhost:3000/article/${id}`;
  return fetch(url).then(res => res.json());
};

export {
  getBrandById,
  getInfluencerById,
  getArticleById,
  getBrandStatsByOfferId,
};
