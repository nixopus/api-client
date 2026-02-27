# @nixopus/api-client

TypeScript API client for [Nixopus](https://github.com/raghavyuva/nixopus), auto-generated from the OpenAPI spec.

## Installation

```bash
npm install @nixopus/api-client @hey-api/client-fetch
# or
yarn add @nixopus/api-client @hey-api/client-fetch
```

## Usage

```typescript
import { createClient } from '@hey-api/client-fetch';
import { getApplications, getDeployments } from '@nixopus/api-client';

const client = createClient({
  baseUrl: 'https://api.nixopus.com',
  getRequestConfig: () => ({
    headers: {
      Authorization: `Bearer ${yourToken}`,
      'Content-Type': 'application/json',
    },
  }),
});

// Use the generated SDK functions
const applications = await getApplications({ client });
const deployments = await getDeployments({ client });
```

## Sync

This package is automatically regenerated and published when the OpenAPI spec changes in the [nixopus](https://github.com/raghavyuva/nixopus) repository.

## Setup 

1. Create a new repo `nixopus/api-client` on GitHub (or use existing)
2. Push this folder:
   ```bash
   cd nixopus-api-client
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/nixopus/api-client.git
   git push -u origin master
   ```
3. Add secrets to the **nixopus** repo: `API_CLIENT_REPO_TOKEN` (GitHub PAT with `repo` scope)
4. Add secrets to the **api-client** repo: `NPM_TOKEN` (from npmjs.com)
