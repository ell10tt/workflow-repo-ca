import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    testDir: './tests/e2e',
    use: {
        baseURL: 'http://127.0.0.1:3000',
        headless: true,
    },
    webServer: {
        command: 'npx serve . -l 3000',
        url: 'http://127.0.0.1:3000',
        reuseExistingServer: true,
    },
});
