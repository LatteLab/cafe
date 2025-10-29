# Latte Lab Website

This repository contains the source code for the Latte Lab website, built with Next.js and Tailwind CSS.

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### Clone the Repository

```bash
git clone [TBD]
cd lattelab-web
```

### Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### Run in Development Mode

Start the development server:
```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

The website will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

To create an optimized production build:
```bash
npm run build
```

Or with yarn:
```bash
yarn build
```

The build output will be located in the `out` directory.

### Deployment
0. (prereq) MIT user deploying must be part of "lattelab-www" group, which can be managed at [webmoira.mit.edu](https://webmoira.mit.edu)
   
1. (Optional) Delete the existing files in the Athena locker:
   ```bash
   ssh [MIT_KERB]@athena.dialup.mit.edu
   rm -rf /afs/athena.mit.edu/org/l/lattelab/*
   ```
   * scp will replace existing files so not necessary, but unused files might take up storage

2. Deploy the new build:
   ```bash
   scp -r out/* [MIT_KERB]@athena.dialup.mit.edu:/afs/athena.mit.edu/org/l/lattelab
   ```

Replace `[MIT_KERB]` with your MIT Kerberos username.
