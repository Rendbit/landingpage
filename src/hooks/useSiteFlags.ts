import { useEffect, useState } from "react";

// Public site-config on the RendBit backend (api.rendbit.com, keyless). Returns
// { flagKey: enabled } for website flags, controlled from the RendBit admin.
const URL = "https://api.rendbit.com/api/v1/public/site-config";

let cache: Record<string, boolean> | null = null;
let inflight: Promise<Record<string, boolean>> | null = null;

function load(): Promise<Record<string, boolean>> {
  if (cache) return Promise.resolve(cache);
  if (!inflight) {
    inflight = fetch(URL)
      .then((r) => r.json())
      .then((j) => (j?.data?.features ?? {}) as Record<string, boolean>)
      .catch(() => ({} as Record<string, boolean>))
      .then((f) => (cache = f));
  }
  return inflight;
}

/**
 * Read one admin-controlled website feature flag. Defaults to `fallback`
 * (false = hidden) until the flag loads, so nothing flashes when it's off.
 */
export function useSiteFlag(key: string, fallback = false): boolean {
  const [on, setOn] = useState<boolean>(cache ? !!cache[key] : fallback);
  useEffect(() => {
    let mounted = true;
    load().then((f) => {
      if (mounted) setOn(!!f[key]);
    });
    return () => {
      mounted = false;
    };
  }, [key]);
  return on;
}
