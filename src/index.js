export function config(entry = []) {
  return [...entry, require.resolve('./preview')];
}

export function managerEntries(entry = [], options) {
  return [...entry, require.resolve('./manager')];
}
