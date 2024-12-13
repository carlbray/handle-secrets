'use strict';

import {getEnv} from '../src/processHelper';

describe('processHelper functions', () => {
  afterEach(() => {
    delete process.env.TEST;
  });

  it('variable exists', () => {
    // Arrange
    const name = 'TEST';
    const expected = 'expected';
    process.env[name] = expected;

    // Act
    const result = getEnv(name);

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
