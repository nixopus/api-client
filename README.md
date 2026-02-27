# @nixopus/api-client

TypeScript API client for [Nixopus](https://github.com/raghavyuva/nixopus), auto-generated from the OpenAPI spec.

## Installation

```bash
npm install @nixopus/api-client @hey-api/client-fetch
# or
yarn add @nixopus/api-client @hey-api/client-fetch
```

For Zod schema validation install `zod` as well:

```bash
npm install @nixopus/api-client @hey-api/client-fetch zod
```

## Usage

```typescript
import { createClient } from '@hey-api/client-fetch';
import { getApiV1DeployApplications, getApiV1DeployApplicationDeployments } from '@nixopus/api-client';

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
const applications = await getApiV1DeployApplications({ client });
const deployments = await getApiV1DeployApplicationDeployments({ client });
```

### Zod schemas

The package exports generated Zod schemas for request/response validation. 

```typescript
import { z } from 'zod';
import { zPostApiV1DeployApplicationData, zPostApiV1DeployApplicationRestartData } from '@nixopus/api-client';

// Request schemas include .shape.body, .shape.query, .shape.path for body/query/path params
const deployBodySchema = zPostApiV1DeployApplicationData.shape.body ?? z.object({});
const restartBodySchema = zPostApiV1DeployApplicationRestartData.shape.body ?? z.object({});
```

## Sync

This package is automatically regenerated and published when the OpenAPI spec changes in the [nixopus](https://github.com/raghavyuva/nixopus) repository.
