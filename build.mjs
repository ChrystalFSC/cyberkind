import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for (const file of ['index.html','styles.css','app.js','cycle-engine.js','health-content.js','i18n.js','storage.js','icon.svg']) await copyFile(file,`dist/${file}`);
console.log('Built Cyclekind static app in dist/');
