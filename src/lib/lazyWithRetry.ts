import { lazy, ComponentType } from "react";

/**
 * Wraps dynamic React component imports with automatic retry logic.
 * Handles Vite dev server restarts, network blips, and stale cache chunks after deployments.
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      return await factory();
    } catch (error: any) {
      console.warn("Dynamic chunk import failed. Retrying once...", error);
      try {
        // Wait 250ms and retry
        await new Promise((resolve) => setTimeout(resolve, 250));
        return await factory();
      } catch (retryError) {
        console.error("Dynamic chunk import failed after retry:", retryError);
        // Let ErrorBoundary handle or reload
        throw retryError;
      }
    }
  });
}
