import { writeFileSync, mkdirSync } from "node:fs";

// The pitch: a smoke alarm that covers up burnt dinner instead of
// screaming about it. Concrete scene (guests arriving, dinner ruined),
// silly-but-plausible mechanism (announce a cover story, open windows).
const PITCH =
  "The Guilt-Free Smoke Alarm detects burnt dinner, calmly announces 'we've all agreed to pretend this is fine,' and opens every window before your guests can smell the evidence.";

// Self-check the gate before writing: exactly one sentence, 1-220 chars.
const terminalStops = (PITCH.match(/\./g) ?? []).length;
if (terminalStops !== 1 || PITCH.length < 1 || PITCH.length > 220) {
  throw new Error(`Gate check failed: ${PITCH.length} chars, ${terminalStops} periods`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to /output/entry.txt`);
