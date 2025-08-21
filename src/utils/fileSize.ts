// src/utils/fileSize.ts
function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const val = bytes / Math.pow(k, i);
  return `${val.toFixed(i === 0 ? 0 : 2)} ${sizes[i]}`;
}

/**
 * Try HEAD (Content-Length). If missing, try GET with Range to read Content-Range.
 * Returns null if size unavailable.
 */
export async function fetchFileSize(
  url: string,
  signal?: AbortSignal
): Promise<string | null> {
  try {
    // 1) Try HEAD
    const headRes = await fetch(url, { method: "HEAD", signal });
    const len = headRes.headers.get("Content-Length");
    if (len) return formatBytes(parseInt(len, 10));

    // 2) Try Range GET fallback (server must support partials)
    const rangeRes = await fetch(url, {
      method: "GET",
      headers: { Range: "bytes=0-0" },
      signal,
    });
    const contentRange = rangeRes.headers.get("Content-Range"); // e.g. "bytes 0-0/123456"
    if (contentRange && contentRange.includes("/")) {
      const total = contentRange.split("/")[1];
      const totalNum = parseInt(total, 10);
      if (!Number.isNaN(totalNum)) return formatBytes(totalNum);
    }

    return null;
  } catch {
    return null;
  }
}
