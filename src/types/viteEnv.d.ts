/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_USERNAME: string;
  readonly VITE_API_KEY: string;
  readonly VITE_API_INSTANCE_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
