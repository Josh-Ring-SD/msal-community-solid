/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
    plugins: [solidPlugin()],
    test: {
        environment: 'jsdom',
        globals: true,
        transformMode: { web: [/\.[jt]sx?$/] },
        setupFiles: ['node_modules/@testing-library/jest-dom/extend-expect.js'],
        // otherwise, solid would be loaded twice:
        deps: { registerNodeLoader: true },
        // if you have few tests, try commenting one
        // or both out to improve performance:
        threads: false,
        isolate: false,
        mockReset: true,
        clearMocks: true,
        restoreMocks: true
    },
    build: {
        target: 'esnext',
    },
    resolve: {
        conditions: ['development', 'browser'],
    },
});
