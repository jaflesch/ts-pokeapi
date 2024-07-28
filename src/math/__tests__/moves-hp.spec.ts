import { describe, expect, it } from '@jest/globals';
import {
  getBrineBasePower,
  getEruptionBasePower,
  getReversalBasePower,
  getWringOutBasePower,
  getHardPressBasePower,
  getCrushGripBasePower,
  getWaterSpoutBasePower,
} from '../moves-hp';

describe('Eruption base power', () => {
  it('returns 150 BP move', () => {
    expect(getEruptionBasePower(343, 343)).toBe(150);
  });

  it('returns 75 BP move', () => {
    expect(getEruptionBasePower(257, 343)).toBe(112);
  });

  it('returns 75 BP move', () => {
    expect(getEruptionBasePower(172, 343)).toBe(75);
  });

  it('returns 37 BP move', () => {
    expect(getEruptionBasePower(86, 343)).toBe(37);
  });

  it('returns 17 BP move', () => {
    expect(getEruptionBasePower(41, 343)).toBe(17);
  });

  it('returns 1 BP move', () => {
    expect(getEruptionBasePower(1, 343)).toBe(1);
  });
});

describe('Water Spout base power', () => {
  it('returns 150 BP move', () => {
    expect(getWaterSpoutBasePower(341, 341)).toBe(150);
  });

  it('returns 75 BP move', () => {
    expect(getWaterSpoutBasePower(256, 341)).toBe(112);
  });

  it('returns 75 BP move', () => {
    expect(getWaterSpoutBasePower(171, 341)).toBe(75);
  });

  it('returns 37 BP move', () => {
    expect(getWaterSpoutBasePower(85, 341)).toBe(37);
  });

  it('returns 18 BP move', () => {
    expect(getWaterSpoutBasePower(41, 341)).toBe(18);
  });

  it('returns 1 BP move', () => {
    expect(getWaterSpoutBasePower(1, 341)).toBe(1);
  });
});

describe('Crush Grip base power', () => {
  it('returns 120 BP move', () => {
    expect(getCrushGripBasePower(301, 301)).toBe(120);
  });

  it('returns 90 BP move', () => {
    expect(getCrushGripBasePower(226, 301)).toBe(90);
  });

  it('returns 68 BP move', () => {
    expect(getCrushGripBasePower(171, 301)).toBe(68);
  });

  it('returns 29 BP move', () => {
    expect(getCrushGripBasePower(75, 301)).toBe(29);
  });

  it('returns 14 BP move', () => {
    expect(getCrushGripBasePower(36, 301)).toBe(14);
  });

  it('returns 1 BP move', () => {
    expect(getCrushGripBasePower(1, 301)).toBe(1);
  });
});

describe('Wring Out base power', () => {
  it('returns 120 BP move', () => {
    expect(getWringOutBasePower(301, 301)).toBe(120);
  });

  it('returns 90 BP move', () => {
    expect(getWringOutBasePower(226, 301)).toBe(90);
  });

  it('returns 68 BP move', () => {
    expect(getWringOutBasePower(171, 301)).toBe(68);
  });

  it('returns 29 BP move', () => {
    expect(getWringOutBasePower(75, 301)).toBe(29);
  });

  it('returns 14 BP move', () => {
    expect(getWringOutBasePower(36, 301)).toBe(14);
  });

  it('returns 1 BP move', () => {
    expect(getWringOutBasePower(1, 301)).toBe(1);
  });
});

describe('Hard Press base power', () => {
  it('returns 100 BP move', () => {
    expect(getHardPressBasePower(301, 301)).toBe(100);
  });

  it('returns 75 BP move', () => {
    expect(getHardPressBasePower(226, 301)).toBe(75);
  });

  it('returns 56 BP move', () => {
    expect(getHardPressBasePower(171, 301)).toBe(56);
  });

  it('returns 24 BP move', () => {
    expect(getHardPressBasePower(75, 301)).toBe(24);
  });

  it('returns 11 BP move', () => {
    expect(getHardPressBasePower(36, 301)).toBe(11);
  });

  it('returns 1 BP move', () => {
    expect(getHardPressBasePower(1, 301)).toBe(1);
  });
});

describe('Reversal base power', () => {
  it('returns 20 BP move', () => {
    expect(getReversalBasePower(241, 241)).toBe(20);
  });

  it('returns 40 BP move', () => {
    expect(getReversalBasePower(164, 241)).toBe(40);
  });

  it('returns 80 BP move', () => {
    expect(getReversalBasePower(84, 241)).toBe(80);
  });

  it('returns 100 BP move', () => {
    expect(getReversalBasePower(27, 241)).toBe(100);
  });

  it('returns 150 BP move', () => {
    expect(getReversalBasePower(12, 241)).toBe(150);
  });

  it('returns 200 BP move', () => {
    expect(getReversalBasePower(1, 241)).toBe(200);
  });
});

describe('Flail base power', () => {
  it('returns 20 BP move', () => {
    expect(getReversalBasePower(181, 181)).toBe(20);
  });

  it('returns 40 BP move', () => {
    expect(getReversalBasePower(123, 181)).toBe(40);
  });

  it('returns 80 BP move', () => {
    expect(getReversalBasePower(63, 181)).toBe(80);
  });

  it('returns 100 BP move', () => {
    expect(getReversalBasePower(36, 181)).toBe(100);
  });

  it('returns 150 BP move', () => {
    expect(getReversalBasePower(18, 181)).toBe(150);
  });

  it('returns 200 BP move', () => {
    expect(getReversalBasePower(7, 181)).toBe(200);
  });
});

describe('Brine base power', () => {
  it('returns 65 BP move', () => {
    expect(getBrineBasePower(300, 300)).toBe(65);
  });

  it('returns 65 BP move', () => {
    expect(getBrineBasePower(150, 300)).toBe(65);
  });

  it('returns 130 BP move', () => {
    expect(getBrineBasePower(149, 300)).toBe(130);
  });

  it('returns 130 BP move', () => {
    expect(getBrineBasePower(1, 300)).toBe(130);
  });
});
