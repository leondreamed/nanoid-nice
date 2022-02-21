import * as nanoidModule from 'nanoid/async/index.js';
import { niceNanoidAsyncWrapper } from '~/utils/clean.js';

export const nanoid = niceNanoidAsyncWrapper(nanoidModule.customAlphabet);
export const { customAlphabet, random } = nanoidModule;
