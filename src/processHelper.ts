'use strict';

export const getEnv = (name: string): string => {
  const value = process.env[name] as string;
  if (undefined === value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
};
