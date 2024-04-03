import { BASE_URL } from '../constants/api';

export const getResourceIdFromURL = (url: string): number => {
  return Number(url.replace(BASE_URL, '').split('/')[1]);
};
