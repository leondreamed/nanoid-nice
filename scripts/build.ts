import { execaCommandSync as exec } from 'execa';
import { chProjectDir, copyPackageFiles, rmDist } from 'lion-system';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const __require = createRequire(import.meta.url);

chProjectDir(import.meta.url);
rmDist();
exec('tsc');
exec('tsc-alias');

// Replace ./utils/naughty-words.js with the actual json
const naughtyWords = __require('naughty-words/en.json') as string[];

fs.writeFileSync(
	'./dist/utils/naughty-words.js',
	`export default ${JSON.stringify(naughtyWords)}`
);

await copyPackageFiles();
