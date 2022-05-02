/**
 * Lighweight script to run all files in this folder (`tests`)
 */
import fs from 'node:fs/promises';
import path from 'node:path';
// import process from 'node:process';

// const ARGV = process.argv.slice(2);
// const isWatch = ARGV.includes('-w') || ARGV.includes('--watch');

async function importAllTestFiles() {
  const currentModulePath = new URL(import.meta.url).pathname;
  /** Current module's direction and file names. */
  const __dirname = path.dirname(currentModulePath);
  const __filename = path.basename(currentModulePath);
  const testFiles = (await fs.readdir(__dirname)).filter(
    (file) => file !== __filename
  );

  const importPromises = testFiles.map((file) => {
    return import(path.resolve(__dirname, file));
  });
  await Promise.all(importPromises);

  // if (isWatch) {
  //   const watcher = fs.watch(__dirname, { recursive: true });
  //   for await (const event of watcher) {
  //     console.log(event);
  //     await import(filePath);
  //   }
  // }
}

importAllTestFiles();
