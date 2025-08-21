// src/hooks/useFileSizes.ts
import { useEffect, useMemo, useState } from "react";
import { fetchFileSize } from "../utils/fileSize";

export function useFileSizes(urls: (string | undefined)[]) {
  const [sizes, setSizes] = useState<Record<string, string | null>>({});

  // Build a stable, deduped, normalized list (no "#", no empty)
  const urlsToFetch = useMemo(() => {
    const set = new Set(urls.filter((u): u is string => !!u && u !== "#"));
    return Array.from(set);
  }, [urls]);

  // A simple key to make dependencies stable without deep-compare
  const urlsKey = useMemo(() => urlsToFetch.join("|"), [urlsToFetch]);

  useEffect(() => {
    if (!urlsToFetch.length) return;
    const ctrl = new AbortController();

    // Only fetch what we don't already have
    const missing = urlsToFetch.filter((u) => !(u in sizes));

    if (!missing.length) return;

    (async () => {
      const entries = await Promise.all(
        missing.map(
          async (u) => [u, await fetchFileSize(u, ctrl.signal)] as const
        )
      );

      // Build a patch and avoid state update if no actual changes
      setSizes((prev) => {
        let changed = false;
        const next = { ...prev };
        for (const [u, size] of entries) {
          if (next[u] !== size) {
            next[u] = size;
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    })();

    return () => ctrl.abort();
    // include sizes so we can compute "missing" correctly
  }, [urlsKey, sizes]);

  return sizes;
}
