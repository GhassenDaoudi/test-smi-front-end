import config from '../config';

const getBrandById = (id: string): Promise<IBrand> => {
  const url = `${config.api.baseURL}/brand/${id}`;
  return fetch(url).then(res => res.json());
};

const getBrandStatsByOfferId = (id: string): Promise<IBrandStats> => {
  const url = `${config.api.baseURL}/brand/stats/${id}`;
  return fetch(url).then(res => res.json());
};

const getInfluencerById = (id: string): Promise<IInfulencer> => {
  const url = `${config.api.baseURL}/influencer/${id}`;
  return fetch(url).then(res => res.json());
};

const getArticleById = (id: string) => {
  const url = `${config.api.baseURL}/article/${id}`;
  return fetch(url).then(res => res.json());
};

export {
  getBrandById,
  getInfluencerById,
  getArticleById,
  getBrandStatsByOfferId,
};
