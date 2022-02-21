import * as nanoidModule from 'nanoid/non-secure/index.js';
import { cleanNanoidWrapper } from '~/utils/clean.js';

export const nanoid = cleanNanoidWrapper(nanoidModule.customAlphabet);
export const { customAlphabet } = nanoidModule;
