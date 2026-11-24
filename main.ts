import * as fs from 'fs';
import * as path from 'path';

// Determine the target output directory from environment variable with a safe default fallback.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
// Ensure the output path exists and write the single-line office joke without any trailing newline.
fs.mkdirSync(outputDir, { recursive: true });
const joke = "Our sprint retrospective was derailed for forty minutes because someone set their Slack status to 'escaping' and HR launched a rescue drone.";
fs.writeFileSync(path.join(outputDir, 'entry.txt'), joke, 'utf8');
