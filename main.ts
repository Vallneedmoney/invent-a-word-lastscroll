// lastscroll: one invented English word, defined in a single clear line.
//
// The program writes that one line to /output/entry.txt, deterministically:
// no input, no network, no randomness, no clock. The word and its definition
// are the whole entry.
//
//   lastscroll (n.) — the last check of your phone before bed, the one that
//   keeps you awake for another hour.
//
// Run it with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'lastscroll (n.) — the last check of your phone before bed, the one that keeps you awake for another hour.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');

process.stdout.write(`lastscroll: wrote entry.txt (${ENTRY.length} characters)\n`);
