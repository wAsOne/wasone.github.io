# Full Solitaire faces

All 52 faces are from [AustinGabriel/Public-Domain-and-CC0-Playing-Cards](https://github.com/AustinGabriel/Public-Domain-and-CC0-Playing-Cards), revision `3765067c32fcef42a30e87022332db729658e7cd`, **CC0-1.0**. The original repository declares its source art and modifications public domain/CC0. The copied CC0 legal text is `LICENSE.txt`.

The complete original PNG faces were uniformly resized to **300×420 PNG** with Sharp; no crop, overlaid ranks/suits, recolouring or mixed deck styles. `SOURCE.json` records original paths, original/derived SHA-256 and archive hash. `0/1/2/3` in filenames are Ghosty's existing spades/hearts/diamonds/clubs order; ranks are 1–13. Reproduce with `scripts/import-arcade-faces.mjs` after downloading the pinned archive into the documented backups directory.

`solitaireArt.ts` supplies both the real board and the victory canvas. Ghosty's existing blue reverse and card hitboxes/layout are unchanged. The older Kenney court folder is retained as prior local work/provenance, but no active face renderer uses it.
