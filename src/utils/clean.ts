import naughtyWords from 'naughty-words/en.json' assert { type: 'json' };

export function hasNaughtyWord(id: string) {
	const idWithNumbersReplaced = id
		.replace(/1/g, 'i')
		.replace(/3/g, 'e')
		.replace(/5/g, 's')
		.replace(/8/g, 'b')
		.replace(/0/g, 'o');

	for (const naughtyWord of naughtyWords) {
		const word = (naughtyWord as string).replace(/ /g, '').replace('l', 'i');
		if (new RegExp(word, 'gi').test(idWithNumbersReplaced)) return true;
	}

	return false;
}

export function cleanNanoidWrapper(nanoid: (size?: number) => string) {
	return function (size = 30) {
		let id = nanoid(size);
		while (hasNaughtyWord(id)) {
			id = nanoid(size);
		}

		return id;
	};
}

export function cleanNanoidAsyncWrapper(
	nanoid: (size?: number) => Promise<string>
) {
	return async function (size = 30) {
		let id = await nanoid(size);
		while (hasNaughtyWord(id)) {
			// eslint-disable-next-line no-await-in-loop
			id = await nanoid(size);
		}

		return id;
	};
}
