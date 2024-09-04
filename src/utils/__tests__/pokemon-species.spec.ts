import { describe, expect, it } from '@jest/globals';
import {
  isUltraBeast,
  hasComatoseAbility,
  evolvesFromMoonStone,
} from '../pokemon-species';

describe('When using isUltraBeast()', () => {
  it('returns true if Nihilego', () => {
    expect(isUltraBeast('nihilego')).toBeTruthy();
    expect(isUltraBeast(793)).toBeTruthy();
  });

  it('returns true if Buzzwole', () => {
    expect(isUltraBeast('buzzwole')).toBeTruthy();
    expect(isUltraBeast(794)).toBeTruthy();
  });

  it('returns true if Pheromosa', () => {
    expect(isUltraBeast('pheromosa')).toBeTruthy();
    expect(isUltraBeast(795)).toBeTruthy();
  });

  it('returns true if Xurkitree', () => {
    expect(isUltraBeast('xurkitree')).toBeTruthy();
    expect(isUltraBeast(796)).toBeTruthy();
  });

  it('returns true if Celesteela', () => {
    expect(isUltraBeast('celesteela')).toBeTruthy();
    expect(isUltraBeast(797)).toBeTruthy();
  });

  it('returns true if Kartana', () => {
    expect(isUltraBeast('kartana')).toBeTruthy();
    expect(isUltraBeast(798)).toBeTruthy();
  });

  it('returns true if Guzzlord', () => {
    expect(isUltraBeast('guzzlord')).toBeTruthy();
    expect(isUltraBeast(799)).toBeTruthy();
  });

  it('returns true if Poipole', () => {
    expect(isUltraBeast('poipole')).toBeTruthy();
    expect(isUltraBeast(803)).toBeTruthy();
  });

  it('returns true if Naganadel', () => {
    expect(isUltraBeast('naganadel')).toBeTruthy();
    expect(isUltraBeast(804)).toBeTruthy();
  });

  it('returns true if Stakataka', () => {
    expect(isUltraBeast('stakataka')).toBeTruthy();
    expect(isUltraBeast(805)).toBeTruthy();
  });

  it('returns true if Blacephalon', () => {
    expect(isUltraBeast('blacephalon')).toBeTruthy();
    expect(isUltraBeast(806)).toBeTruthy();
  });

  it('returns false if Bulbasaur', () => {
    expect(isUltraBeast('bulbasaur')).toBeFalsy();
    expect(isUltraBeast(1)).toBeFalsy();
  });

  it('returns false if Magearna', () => {
    expect(isUltraBeast('magearna')).toBeFalsy();
    expect(isUltraBeast(800)).toBeFalsy();
  });

  it('returns false if Sprigatito', () => {
    expect(isUltraBeast('sprigatito')).toBeFalsy();
    expect(isUltraBeast(906)).toBeFalsy();
  });
});

describe('When using hasComatoseAbility()', () => {
  it('returns true if Komala', () => {
    expect(hasComatoseAbility('komala')).toBeTruthy();
    expect(hasComatoseAbility(775)).toBeTruthy();
  });

  it('returns false if not Komala', () => {
    expect(isUltraBeast('electabuzz')).toBeFalsy();
    expect(isUltraBeast(125)).toBeFalsy();
  });
});

describe('When using evolvesFromMoonStone()', () => {
  it('returns true if Nidorina', () => {
    expect(evolvesFromMoonStone('nidorina')).toBeTruthy();
    expect(evolvesFromMoonStone(30)).toBeTruthy();
  });

  it('returns true if Nidorino', () => {
    expect(evolvesFromMoonStone('nidorino')).toBeTruthy();
    expect(evolvesFromMoonStone(33)).toBeTruthy();
  });

  it('returns true if Clefairy', () => {
    expect(evolvesFromMoonStone('clefairy')).toBeTruthy();
    expect(evolvesFromMoonStone(35)).toBeTruthy();
  });

  it('returns true if JigglyPuff', () => {
    expect(evolvesFromMoonStone('jigglypuff')).toBeTruthy();
    expect(evolvesFromMoonStone(39)).toBeTruthy();
  });

  it('returns true if Skitty', () => {
    expect(evolvesFromMoonStone('skitty')).toBeTruthy();
    expect(evolvesFromMoonStone(300)).toBeTruthy();
  });

  it('returns true if Munna', () => {
    expect(evolvesFromMoonStone('munna')).toBeTruthy();
    expect(evolvesFromMoonStone(517)).toBeTruthy();
  });

  it('returns false if Growlithe', () => {
    expect(isUltraBeast('growlithe')).toBeFalsy();
    expect(isUltraBeast(58)).toBeFalsy();
  });
});
