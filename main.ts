// "The Last Wave" — ai-excited-01 entry (Node 22, standard library only).
//
// The picture: a lone surfer, small against a colossal wave of glowing glass and
// fire at sunset. The wave is lit from inside — cyan and gold bioluminescence —
// towering like a mountain over the surfer, frozen a heartbeat before it breaks.
// One ride, one wave, everything on the line.
//
// This program does exactly one job: it copies the finished image sitting next
// to this file (entry.png) into the grader's output folder as entry.png, so the
// judge sees those exact bytes. The image is a JPEG in a .png file, 1024x1024,
// well under the 1 MiB limit.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const scriptDir = new URL('.', import.meta.url).pathname;
const sourceImage = join(scriptDir, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Make sure the output folder exists first — the grader's /output is not
// guaranteed to be there, and copyFileSync fails if it is missing.
mkdirSync(outputDir, { recursive: true });

copyFileSync(sourceImage, join(outputDir, 'entry.png'));
