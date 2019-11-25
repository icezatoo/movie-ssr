export function isEmpty(value: any) {
  if (value === null || value === undefined) {
    return true
  } else if (typeof value === "object" && !Array.isArray(value)) {
    return Object.entries(value).length === 0 && value.constructor === Object
  } else if (Array.isArray(value)) {
    return !Array.isArray(value) || !value.length
  }
}
