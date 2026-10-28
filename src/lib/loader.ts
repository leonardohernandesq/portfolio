let loaded = false;
const listeners = new Set<() => void>();

export function onLoaded(callback: () => void) {
  if (loaded) {
    callback();
    return () => {};
  }
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

export function markLoaded() {
  loaded = true;
  listeners.forEach((callback) => callback());
  listeners.clear();
}
