/// <reference types="astro/client" />

// This file extends the Astro client types
declare module "astro" {
  interface AstroGlobal {
    generator: string;
    site: URL | undefined;
    url: URL;
    props: any;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  interface ImportMeta {
    env: {
      BASE_URL: string;
      [key: string]: any;
    };
  }
}

export {};
