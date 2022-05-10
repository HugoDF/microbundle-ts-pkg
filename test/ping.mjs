import test from 'node:test';
import assert from 'node:assert/strict';
import { ping } from '../dist/main.js';

test('ping', (_t) => {
  assert.equal(ping(), 'pong');
});
