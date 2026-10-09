# Shakti Cauldron

Local-first chemistry mastery desk by [Shrinjoy Ghosh](https://github.com/Gitersg).

[![Download the app](https://img.shields.io/badge/Download-one%20HTML%20file-3d9a86?style=for-the-badge)](https://github.com/Gitersg/shakti-cauldron/releases/latest/download/shakti-cauldron.html)

**[Download Shakti Cauldron 1.2.1](https://github.com/Gitersg/shakti-cauldron/releases/latest/download/shakti-cauldron.html)** — one click, one HTML file. Save it. Open it in any browser. Nothing else to install. No account and no server. Missions, ranks, alchemy notes, the question bank, and settings stay in that browser until you export a backup.

`index.html` in this repository is that same file. Open it. Do not look for extra scripts.

The hosted desk carries the longer guided path. This download is the starter set you can extend. Both speak the same backup JSON (`app: "shakti-cauldron"`, `version: 1`). Export on one, import on the other.

## What it trains

- Guided missions: read, solve, safe practicals, and product-planning cards.
- Your own missions, with a real track you pick. Write sits at the top of the bench, not under the list.
- Delete a mission. If it was sealed, the XP comes back, so a page cannot be farmed.
- A question bank on the Drills page. Paste or upload your own multiple-choice checks, up to 4,000. There is no daily reset. Correct answers pay 6 XP until the total reaches rank 10, Equilibrium Eye (2,601 XP). After that, drills still show the reason and pay nothing.
- An alchemy notebook: target product, ingredients, conditions, method, hazards, observations, and any extra fields you add.
- Experience that levels a 20-rank curve. Higher ranks cost more XP. Rank *n* starts at `40 × (n − 1)^1.9` XP, rounded. Sealing a mission, and rising a rank, each get their own moment.
- Export and import of the whole desk.

## Question bank

On Drills, open **Question bank**. The template is on that screen. Press **Put the template in the box**, change the words, then add it. Or press **Download the template**, fill `mcq-template.txt`, and choose that file. The bank holds up to 4,000 checks. A right answer pays 6 XP until the total reaches 2,601, which is rank 10, Equilibrium Eye. After that the reason still shows and the XP stops. There is no daily reset, and the desk does not keep a list of which question already paid.

Separate each question with a line that is only `---`.

```
---
Track: Acids
Q: A solution of pH 3 is
A) strongly basic
B) weakly basic
C) acidic
D) neutral
Answer: C
Why: Below 7 is acidic. 7 is neutral water.
---
```

Answer is A, B, C, D or 1, 2, 3, 4. 1 is the first choice. Track and Why can be left out.

JSON works too. `answer` is `"C"` or `3` (the third choice).

```json
[
  {
    "track": "Acids",
    "q": "A solution of pH 3 is",
    "choices": ["strongly basic", "weakly basic", "acidic", "neutral"],
    "answer": "C",
    "why": "Below 7 is acidic."
  }
]
```

## What it will not do

Shakti Cauldron does not publish home recipes for hazardous concentrates, drugs, or explosives. The phenyl mission is a product specification and a refusal list for a pine-oil disinfectant emulsion. It is not a mix sheet. Real bench work belongs in a supervised lab, with a source you trust, and within the law where you live.

See [SAFETY.md](SAFETY.md).

## Use it

1. Click **[Download the app](https://github.com/Gitersg/shakti-cauldron/releases/latest/download/shakti-cauldron.html)**. Save `shakti-cauldron.html`. Open it.
2. Or download this repository as a ZIP, unzip, and open `index.html`. That file is the whole app.
3. Or, in the hosted desk, use **Download portable app**. Same kind of file.
4. Work a mission. Check every step. Seal it. XP lands once.
5. Export a JSON backup before you clear the browser.

The same file is on the [latest release](https://github.com/Gitersg/shakti-cauldron/releases/latest).

## License

[MIT](LICENSE). Copyright (c) 2026 Shrinjoy Ghosh.
