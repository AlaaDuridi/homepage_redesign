import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

export const createRtlCache = () =>
  createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

export const createLtrCache = () =>
  createCache({
    key: 'muiltr',
  });
