// Auto-reset timer worker
let timeoutId: NodeJS.Timeout | null = null;

self.onmessage = (e) => {
  if (e.data === "start") {
    timeoutId = setTimeout(() => {
      self.postMessage("reset");
    }, 5 * 60 * 1000); // 5 minutes
  } else if (e.data === "cancel") {
    if (timeoutId && clearTimeout(timeoutId));
    timeoutId = null;
  } else if (e.data === "reset-timer") {
    if (timeoutId && clearTimeout(timeoutId));
    timeoutId = setTimeout(() => {
      self.postMessage("reset");
    }, 5 * 60 * 1000);
  }
};

export {};
