import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // If it's a dynamic module import failure (e.g. after Vite server restart or new build deploy)
    const isChunkLoadError =
      error.message?.includes("Failed to fetch dynamically imported module") ||
      error.message?.includes("Importing a module script failed") ||
      error.message?.includes("error loading dynamically imported module");

    if (isChunkLoadError) {
      const storageKey = "chunk_failed_reload";
      const lastReload = sessionStorage.getItem(storageKey);
      const now = Date.now();

      // Only reload once every 10 seconds to avoid infinite reload loops
      if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
        sessionStorage.setItem(storageKey, now.toString());
        console.warn("Reloading to fetch fresh application modules...");
        window.location.reload();
      }
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-md rounded-2xl bg-white p-8 shadow-medical ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Something went wrong</h2>
            <p className="text-sm text-slate-600 mb-6">
              A connection or module loading issue occurred. Reloading usually resolves this immediately.
            </p>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110 active:scale-95 transition-all shadow-sm"
              >
                Reload Page
              </button>
              <a
                href="/"
                className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 active:scale-95 transition-all"
              >
                Go to Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
