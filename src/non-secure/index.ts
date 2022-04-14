import * as nanoidModule from 'nanoid/non-secure/index.js';

import { niceNanoidWrapper } from '~/utils/clean.js';

export const nanoid = niceNanoidWrapper(nanoidModule.customAlphabet);
export const { customAlphabet } = nanoidModule;
