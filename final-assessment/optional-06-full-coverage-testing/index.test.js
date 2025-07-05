import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum function full coverage tests', () => {
  // Normal case: positive numbers
  assert.strictEqual(sum(3, 5), 8);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(10, 20), 30);

  // Negative numbers should return 0
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-10, -20), 0);

  // Non-number inputs should return 0
  assert.strictEqual(sum('3', 5), 0);
  assert.strictEqual(sum(3, '5'), 0);
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(3, undefined), 0);
  assert.strictEqual(sum({}, []), 0);

  // Edge case: zero and positive number
  assert.strictEqual(sum(0, 10), 10);
  assert.strictEqual(sum(10, 0), 10);
});