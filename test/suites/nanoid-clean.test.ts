import { hasNaughtyWord } from '~/utils/clean.js';

test('filters out bad words', () => {
	expect(hasNaughtyWord('bass')).toBe(true);
	expect(hasNaughtyWord('ba55')).toBe(true);
});
