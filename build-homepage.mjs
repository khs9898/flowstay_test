import { copyFile, mkdir, readFile } from 'node:fs/promises';

const output = new URL('./flowstay-dist/', import.meta.url);
const assets = ['index.html', 'styles.css', 'app.js', 'favicon.svg'];
await mkdir(output, { recursive: true });
for (const asset of assets) {
  const source = new URL(asset, import.meta.url);
  await copyFile(source, new URL(asset, output));
  const [before, after] = await Promise.all([readFile(source), readFile(new URL(asset, output))]);
  if (!before.equals(after)) throw new Error(`Copy verification failed: ${asset}`);
}
console.log(`Published ${assets.length} verified homepage assets to flowstay-dist.`);
