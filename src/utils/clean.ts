import type { AsyncNanoidFunction, NanoidFunction } from '~/types.js';

import naughtyWords from './naughty-words.cjs';

export function hasNaughtyWord(id: string) {
	const idWithNumbersReplaced = id
		.replace(/1/g, 'i')
		.replace(/3/g, 'e')
		.replace(/5/g, 's')
		.replace(/8/g, 'b')
		.replace(/0/g, 'o');

	for (const naughtyWord of naughtyWords) {
		const word = naughtyWord.replace(/ /g, '').replace('l', 'i');
		if (new RegExp(word, 'gi').test(idWithNumbersReplaced)) return true;
	}

	return false;
}

export function niceNanoidWrapper(
	customAlphabet: (alphabet: string) => NanoidFunction
) {
	const gen = customAlphabet('6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz');

	return function (size = 30) {
		let id = gen(size);
		while (hasNaughtyWord(id)) {
			id = gen(size);
		}

		return id;
	};
}

export function niceNanoidAsyncWrapper(
	customAlphabet: (alphabet: string) => AsyncNanoidFunction
) {
	const gen = customAlphabet('6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz');

	return async function (size = 30) {
		let id = await gen(size);
		while (hasNaughtyWord(id)) {
			// eslint-disable-next-line no-await-in-loop
			id = await gen(size);
		}

		return id;
	};
}
