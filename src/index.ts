import * as nanoidModule from 'nanoid';
import { cleanNanoidWrapper } from '~/utils/clean.js';

export const nanoid = cleanNanoidWrapper(nanoidModule.customAlphabet);
export const { customAlphabet, customRandom, urlAlphabet, random } =
	nanoidModule;
