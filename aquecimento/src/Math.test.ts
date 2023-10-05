import { describe, expect, it } from 'bun:test'
import { fatorial, sum } from './Math';


describe('Tests over sum', () => {
    it('should sum two positive numbers correctly', () => {
      const n1 = 5, n2 = 4;
      const result = sum(n1, n2)
      expect(result).toBe(9);
      expect(sum(3, -3)).toBe(0);
      expect(sum(-3, 5)).toBe(2);
      expect(sum(-3, -3)).toBe(-6);
      expect(sum(3333, -3)).toBe(3330);
    })
})

describe('Tests over fatorial', () => {
  it('should correctly resolve the fatorial of a number', () => {
    const n1 = 5;
    const result = fatorial(n1);
    expect(result).toBe(120);
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
    expect(fatorial(2)).toBe(2);
    expect(fatorial(3)).toBe(6);
    expect(fatorial(-1)).toBe(NaN);
  })
})