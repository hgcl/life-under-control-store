# Life Under Control Store

The website is built with Next.js 15, Typescript, Sanity (CMS), Clerk (authentication), and Stripe (payment).

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
- `docs` – updates to documentation such as the README or other markdown files
- `style` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semicolons, and so on.
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

## Behind the scenes

### Sanity

Sanity is used as a CMS, storing on their online servers all data about products, product categories, and orders.

The shop (dev and prod) is connected to that database through the **Live Content API**. The `<SanityLive/>` component is added to `@/src/app/(store)/layout.tsx`. This makes sure that admins can edit products/orders information in real-time by logging into https://shop.clarale.com/studio.

Sanity Studio — the headless CMS interface — lives in `@/src/app/studio`. Admins can create new assets directly in the interface. To edit the interface metadata, you can do so in `@/sanity`. For instance, if you wanted to create "posts" on top of "products", you'd need to add a new file called `postType.ts` in `@/sanity/schemaTypes`.

Do not forget to run `npm run typegen` to automatically generate a new `@/schema.json` file that specifies all used types.

### Clerk

Clerk is set up to manage user accounts. Thanks to Clerk, users can create and view their account information, as well as past orders.

The `clerkMiddleware()` helper (imported in `@/src/middleware.ts`) integrates Clerk authentication into the Next.js application through Middleware.

The `<ClerkProvider/>` component provides user and session context to Clerk's hooks and components. It is added to `@/src/app/(store)/layout.tsx`. This context provider allows us to import and use specific Clerk components in any other parts of the application (i.e. `SignInButton`, `useUser`).

### Stripe

Stripe is set up to receive payments.

On the `/cart` page (found at `@/src/app/(store)/cart/page.tsx`), the checkout process is launched with function `handleCheckout`, which calls the `createCheckoutSession` function. This opens a custom Stripe checkout session URL for the user to pay for their cart (the user and cart metadata are saved on Stripe).

Once paid successfully, the user is redirected to the `/success` page. A webhook (found at `@/src/app/(store)/webhook/route.ts`) is hit by Stripe, which creates a new order for the user in Sanity. The webhook URL needs to be specified in the Stripe dashboard.
