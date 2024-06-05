export function getNonEmptyArrayKeys(obj = {}) {
  return Object.keys(obj).filter(
    (key) => Array.isArray(obj[key]) && obj[key].length > 0
  );
}
