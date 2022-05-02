import test from 'node:test';
import assert from 'node:assert/strict';
import { version } from '../dist/main.js';
import pkg from '../package.json' assert { type: 'json' };

test('version', (_t) => {
  assert.equal(version, pkg.version);
});
