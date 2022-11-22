const getBrandById = (id: string): Promise<IBrand> => {
  const url = `http://localhost:3000/brand/${id}`;
  return fetch(url).then(res => res.json());
};

const getBrandStatsByOfferId = (id: string): Promise<IBrandStats> => {
  const url = `http://localhost:3000/brand/stats/${id}`;
  return fetch(url).then(res => res.json());
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
