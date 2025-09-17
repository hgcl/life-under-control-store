# Life Under Control Store

The website is built with NextJS 15, Typescript, Sanity (CMS), Clerk (authentication), and Stripe (payment).

## Commit conventions

```
<type>[optional scope]: <description>

<optional body>

<optional footer>
```

- `feat` – a new feature is introduced with the changes
- `fix` – a bug fix has occurred
- `chore` – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
- `refactor` – refactored code that neither fixes a bug nor adds a feature
- `docs` – updates to documentation such as a the README or other markdown files
- `style` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
- `test` – including new or correcting previous tests
- `perf` – performance improvements
- `ci` – continuous integration related
- `build` – changes that affect the build system or external dependencies
- `revert` – reverts a previous commit
- `content` – content-related commits

Commit example:

```
fix: fix foo to enable bar

This fixes the broken behavior of the component by doing xyz.

BREAKING CHANGE
Before this fix foo wasn't enabled at all, behavior changes from <old> to <new>

Closes D2IQ-12345
```

---

Inspired by [Sonny Sangha's tutorial](https://www.youtube.com/live/o-fgWea75O4?si=a-XqEM12dyDq1G8G&t=6917)
