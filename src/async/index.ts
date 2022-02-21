import * as nanoidModule from 'nanoid/async/index.js'
import { cleanNanoidAsyncWrapper } from '~/utils/clean.js';

export const nanoid = cleanNanoidAsyncWrapper(nanoidModule.nanoid);
export const { customAlphabet, random } = nanoidModule;