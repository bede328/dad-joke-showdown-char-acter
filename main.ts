// Dad Joke Showdown — one original dad joke.
//
// The program writes the joke, and only the joke, to /output/entry.txt.
// The sealed gate counts characters: 1 to 200, not only whitespace, no
// trailing newline. This joke is 86 characters, one line, punchline last.
// Length is counted in code points ([...JOKE]), so the gate's count and
// this check agree even if the text ever gains a multi-byte character.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked my dad why he always burns the burgers. He said, 'I'm just adding char-acter.'";

const length = [...JOKE].length;
if (length < 1 || length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
