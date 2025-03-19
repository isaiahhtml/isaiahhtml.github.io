---
title: TIL
layout: base.njk
---

In 11ty, `https://` or an `http://` is a must when putting a link in Markdown. 
If you don't, it gets parsed differently. Must investigate if it's the same with 
all Markdown flavors.

Nevermind, it might be the default behavior. Tried it out with Obsidian.

When command history or arrow keys are not working in sqlite3 cli, use `rlwrap` 
because installed sqlite cli does not readline support.
