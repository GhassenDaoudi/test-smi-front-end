import {useQueries, useQuery} from '@tanstack/react-query';
import {
  getArticleById,
  getBrandById,
  getBrandStatsByOfferId,
  getInfluencerById,
} from '../api';

export const useBrand = (id: string) =>
  useQuery(['brand', id], () => getBrandById(id));

export const useBrandStats = (id: string) =>
  useQuery(['brand', 'stats', id], () => getBrandStatsByOfferId(id));

export const useInfluencer = (id: string) =>
  useQuery(['influencer', id], () => getInfluencerById(id));

export const useArticle = (id: string) =>
  useQuery(['article', id], () => getArticleById(id));

export const useArticles = (ids: string[]) =>
  useQueries({
    queries: ids.map(id => {
      return {
        queryKey: ['article', id],
        queryFn: () => getArticleById(id),
      };
    }),
  });
