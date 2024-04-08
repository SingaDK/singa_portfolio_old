/// <reference path="../.astro/types.d.ts" />
/// <reference types="astrojs/client" />

interface ImportMetaEnv {
    SITE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
