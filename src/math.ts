import { InvalidParameterValueError } from './errors/InvalidParameterValueError';

type GetStatValueParams = {
  hp?: boolean;
  base: number;
  iv?: number;
  ev?: number;
  level: number;
  nature?: 'enhancing' | 'hindering' | 'neutral';
};

export const getStatValue = (params: GetStatValueParams): number => {
  const iv = params.iv ?? 31;
  if (iv < 0 || iv > 31) {
    throw new InvalidParameterValueError('IV parameter must be a value between 0 and 31');
  }

  const evValue = (params.ev ?? 0) / 4;
  if (evValue < 0 || evValue > 63.75) {
    throw new InvalidParameterValueError('EV parameter must be a value between 0 and 252');
  }

  const natureCoeficient = params.nature === 'enhancing' ? 1.1 : params.nature === 'hindering' ? 0.9 : 1;

  const result = ((2 * params.base + iv + Math.floor(evValue)) * params.level) / 100;

  if (params.hp) {
    return Math.floor(result) + params.level + 10;
  } else {
    return Math.floor((Math.floor(result) + 5) * natureCoeficient);
  }
};

export const getMaxStatValue = (params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>): number => {
  return getStatValue({
    ...params,
    iv: 31,
    ev: 255,
    nature: 'enhancing',
  });
};

export const getMinStatValue = (params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>): number => {
  return getStatValue({
    ...params,
    iv: 0,
    ev: 0,
    nature: 'hindering',
  });
};

export const getPriorGenIIIStatValue = (params: Omit<GetStatValueParams, 'nature'>) => {};
type GetGoPowerStatValue = {
  // ...
};
export const getGoPowerStatValue = (params: GetGoPowerStatValue) => {
  // to do...
};
