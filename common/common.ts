export function isEmpty(value: any) {
  if (value === null || value === undefined) {
    return true
  } else if (typeof value === "object" && !Array.isArray(value)) {
    return Object.entries(value).length === 0 && value.constructor === Object
  } else if (Array.isArray(value)) {
    return !Array.isArray(value) || !value.length
  }
}

export const convertMinToHour = n => `0${(n / 60) ^ 0}`.slice(-2) + ":" + ("0" + (n % 60)).slice(-2)
