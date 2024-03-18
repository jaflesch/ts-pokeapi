import {
  MIN_EV_VALUE,
  MAX_EV_VALUE,
  MIN_IV_VALUE,
  MAX_IV_VALUE,
  MIN_IV_VALUE_PRIOR_GEN3,
  MAX_IV_VALUE_PRIOR_GEN3,
  MIN_EV_VALUE_PRIOR_GEN3,
  MAX_EV_VALUE_PRIOR_GEN3,
} from './constants';
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
  const iv = params.iv ?? MAX_IV_VALUE;
  if (iv < MIN_IV_VALUE || iv > MAX_IV_VALUE) {
    throw new InvalidParameterValueError(
      `IV parameter must be a value between 0 and ${MAX_IV_VALUE}`,
    );
  }

  const evValue = (params.ev ?? 0) / 4;
  if (evValue < MIN_EV_VALUE || evValue > MAX_EV_VALUE / 4) {
    throw new InvalidParameterValueError(
      `EV parameter must be a value between 0 and ${MAX_EV_VALUE}`,
    );
  }

  const natureCoeficient =
    params.nature === 'enhancing'
      ? 1.1
      : params.nature === 'hindering'
        ? 0.9
        : 1;

  const result =
    ((2 * params.base + iv + Math.floor(evValue)) * params.level) / 100;

  if (params.hp) {
    return Math.floor(result) + params.level + 10;
  } else {
    return Math.floor((Math.floor(result) + 5) * natureCoeficient);
  }
};

export const getMaxStatValue = (
  params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>,
): number => {
  return getStatValue({
    ...params,
    iv: MAX_IV_VALUE,
    ev: MAX_EV_VALUE,
    nature: 'enhancing',
  });
};

export const getMinStatValue = (
  params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>,
): number => {
  return getStatValue({
    ...params,
    iv: MIN_IV_VALUE,
    ev: MIN_EV_VALUE,
    nature: 'hindering',
  });
};

export const getPriorGenIIIStatValue = (
  params: Omit<GetStatValueParams, 'nature'>,
) => {
  const iv = params.iv ?? MAX_IV_VALUE_PRIOR_GEN3;
  if (iv < MIN_IV_VALUE_PRIOR_GEN3 || iv > MAX_IV_VALUE_PRIOR_GEN3) {
    throw new InvalidParameterValueError(
      `IV parameter must be a value between 0 and ${MAX_IV_VALUE_PRIOR_GEN3}`,
    );
  }

  const evValue = params.ev ?? 0;
  if (evValue < MIN_EV_VALUE_PRIOR_GEN3 || evValue > MAX_EV_VALUE_PRIOR_GEN3) {
    throw new InvalidParameterValueError(
      `EV parameter must be a value between 0 and ${MAX_EV_VALUE_PRIOR_GEN3}`,
    );
  }

  const baseIv = (params.base + iv) * 2;
  const evSqrt = Math.floor(Math.ceil(Math.sqrt(evValue)) / 4);
  const result = Math.floor(((baseIv + evSqrt) * params.level) / 100);

  if (params.hp) {
    return result + params.level + 10;
  } else {
    return result + 5;
  }
};

type GetGoPowerStatValue = {
  // ...
};
export const getGoPowerStatValue = (params: GetGoPowerStatValue) => {
  // to do...
};
