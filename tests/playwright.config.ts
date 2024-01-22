import { defineConfig } from '@playwright/test';

export default defineConfig({
 // Other configuration options...

 webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
 },
});