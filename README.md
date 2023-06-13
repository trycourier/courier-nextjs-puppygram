
![Puppygram Hero](https://www.courier.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fz7iqk1q8njt4%2F24KKl1zpMei98MkcreI103%2F2b1d47900004dca699e4e4e86d050656%2Fpuppygram-header-2.jpg&w=1920&q=75)

This is a [Next.js](https://nextjs.org/) app that uses data from the [random.dog API](https://random.dog) and [Courier](https://courier.com/?utm_source=courier-nextjs-puppygram&utm_medium=code-template&utm_campaign=devrel-apps) to provide the backend to for the [Puppygram](https://courier-nextjs-puppygram.vercel.app) app.

Check-out [this deep dive](https://www.courier.com/blog/introducing-puppygram-powered-by-courier-inbox-next-js-and-inngest/) into how this app was built for more details.

## Getting Started

Clone the repo and install dependencies:

```bash
npm install
```

## Prerequisites

In order to run this app, you'll need:

1. A free [Courier](https://courier.com/?utm_source=courier-nextjs-puppygram&utm_medium=code-template&utm_campaign=devrel-apps) account
2. A free [Inngest](https://inngest.com) account

## Configure Courier and Inngest accounts

Follow the instructions in this [companion blog post](https://www.courier.com/blog/introducing-puppygram-powered-by-courier-inbox-next-js-and-inngest/) to:

- Retrieve your Courier API key
- Set-up the Courier Inbox provider
- Retrieve your Courier Public Client Key
- Retrieve your Inngest Event Key
- Retrieve your Inngest Signing Key

Create a `.env.local` file at the root of the project to store secrets for Courier and Inngest.

```
COURIER_AUTH_TOKEN=pk_prod_xxx
NEXT_PUBLIC_COURIER_USER=puppygram
NEXT_PUBLIC_COURIER_CLIENT_KEY=yyy
INNGEST_EVENT_KEY=zzz
INNGEST_SIGNING_KEY=signkey-prod-xxx
```

## Running the app

Start the Next.js app:

```bash
npm run dev
```

In another terminal, start the Inngest local dev server:

```bash
npx inngest-cli@latest dev
```

Open `http://localhost:3000` in your browser.

## Deploy

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Courier, take a look at the following resources:

- [Sign-up](https://app.courier.com?utm_source=courier-nextjs-puppygram&utm_medium=code-template&utm_campaign=devrel-apps) - Sign up and get 10k messages/month for free.
- [Docs](https://courier.com/docs?utm_source=courier-nextjs-puppygram&utm_medium=code-template&utm_campaign=devrel-apps) - Platform and API reference docs
- [Integrations](https://courier.com/integrations?utm_source=courier-nextjs-puppygram&utm_medium=code-template&utm_campaign=devrel-apps) - Full list of SMS, email and eventing integrations.
- [Changelog](https://courier.com/changelog?utm_source=courier-nextjs-puppygram&utm_medium=code-template&utm_campaign=devrel-apps) - See what we've fixed and what we've shipped every week.