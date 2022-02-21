import * as nanoidModule from 'nanoid/non-secure/index.js';
import { cleanNanoidWrapper } from '~/utils/clean.js';

export const nanoid = cleanNanoidWrapper(nanoidModule.nanoid);
export const { customAlphabet } = nanoidModule;
