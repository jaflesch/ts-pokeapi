import { describe, expect, it } from '@jest/globals';
import { BASE_URL } from '../constants';
import { getResourceIdFromURL } from '../utils';

describe('When using getResourceIdFromURL()', () => {
  const url = `${BASE_URL}pokemon`;

  it('returns the id from given URL', async () => {
    expect(getResourceIdFromURL(url + '/100')).toBe(100);
  });

  it('returns NaN if URL does not ends with an id', async () => {
    expect(getResourceIdFromURL(url + '/vulpix')).toBe(NaN);
  });
});
