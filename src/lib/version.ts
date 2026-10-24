// Set at build time by the deploy job (VITE_APP_VERSION); local and test builds have none.
export const appVersion = (): string => import.meta.env.VITE_APP_VERSION || "dev build";
