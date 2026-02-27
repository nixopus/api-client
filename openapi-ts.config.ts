import type { UserConfig } from '@hey-api/openapi-ts';

export default {
  input: 'openapi.json',
  output: 'src',
  plugins: [
    '@hey-api/client-fetch',
    '@hey-api/sdk',
    {
      name: 'zod',
      includeInEntry: true,
      compatibilityVersion: 3,
    },
  ],
} satisfies UserConfig;
