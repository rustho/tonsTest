# My React TypeScript App

This is a simple React application that allows users to authorize a wallet through TON Connect and perform staking operations using the Tonstakers SDK. It also displays the exchange rate of TON to USD and the equivalent value of tsTON in USD.

## Features

- Authorize wallet through TON Connect
- (Not implemented) Perform staking operations
- Display exchange rates for TON and tsTON

## Homepage

You can view the demo of this application at [https://rustho.github.io/tonsTest](https://rustho.github.io/tonsTest).

## Installation

To install the dependencies, run:

```bash
npm install
```

## Scripts

This project includes several scripts for development and deployment:

- **dev**: Start the development server.
- **build**: Build the project for production.
- **lint**: Run ESLint to check for code quality.
- **preview**: Preview the production build.
- **predeploy**: Build the project before deploying.
- **deploy**: Deploy the project to GitHub Pages.

## Dependencies

This project uses the following dependencies:

- `@ton/core`
- `@ton/ton`
- `@tonconnect/ui-react`
- `axios`
- `react`
- `react-dom`
- `tonstakers-sdk`

## License

This project is licensed under the MIT License.
