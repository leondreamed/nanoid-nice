import * as nanoidModule from 'nanoid';

import { niceNanoidWrapper } from '~/utils/clean.js';

export const nanoid = niceNanoidWrapper(nanoidModule.customAlphabet);
export const { customAlphabet, customRandom, urlAlphabet, random } =
	nanoidModule;
export { hasNaughtyWord, niceAlphabet } from './utils/clean.js'