'use strict';

import {getEnv} from '../src/processHelper';

describe('processHelper functions', () => {
  const TEST = 'TEST';

  afterEach(() => {
    delete process.env[TEST];
  });

  it('variable exists', () => {
    // Arrange
    const expected = 'expected';
    process.env[TEST] = expected;

    // Act
    const result = getEnv(TEST);

    // Assert
    expect(result).toEqual(expected);
  });

  it('missing variable', () => {
    // Arrange
    const name = 'MISSING';

    // Act + Assert
    expect(() => getEnv(name)).toThrow(`Missing environment variable: ${name}`);
  });
});
