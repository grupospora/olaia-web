import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
const header = await readFile(new URL('src/includes/header.html', root), 'utf8');
const marker = '<!-- OLAIA_HEADER -->';
const pages = (await readdir(root, { withFileTypes: true }))
  .filter(entry => entry.isFile() && entry.name.endsWith('.html'));

if (!pages.some(page => page.name === 'index.html')) {
  throw new Error('Falta index.html');
}

const compiledPages = await Promise.all(pages.map(async ({ name }) => {
  const source = await readFile(new URL(name, root), 'utf8');
  if (source.split(marker).length !== 2) {
    throw new Error(`${name} debe incluir exactamente un marcador de cabecera`);
  }
  return { name, html: source.replace(marker, () => header.trim()) };
}));

await rm(output, { recursive: true, force: true });
await mkdir(output);
await cp(new URL('assets/', root), new URL('assets/', output), { recursive: true });
for (const { name, html } of compiledPages) {
  await writeFile(new URL(name, output), html);
}
await writeFile(new URL('.nojekyll', output), '');
