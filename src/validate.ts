/**
 * email
 * @param s
 */
export function isEmail(s: string) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * cell phone number
 * @param s
 */
export function isMobile(s: string) {
  return /^1[0-9]{10}$/.test(s)
}

/**
 * URL
 * @param s
 */
export function isURL(s: string) {
  return /^http[s]?:\/\/.*/.test(s)
}

/**
 * lowercase
 * @param str
 */
export function isLowerCase(str: string) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * uppercase
 * @param str
 */
export function isUpperCase(str: string) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * alphabet
 * @param str
 */
export function isAlphabet(str: string) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
