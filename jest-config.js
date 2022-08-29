import {defaults} from 'jest-config';

/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mjs', 'cjs'],
};

export default config;