/**
 * Determines whether oParam is a number
 * @param {any} sParam: The Parameter to check
 * @returns {boolean} - Result
 */
const isNumber = (sParam) => {
  return typeof sParam === "number";
};
/**
 * Determines whether oParam is string
 * @param {any} oParam: The Parameter to check
 * @returns {boolean} - Result
 */
const isString = (oParam) => {
  return typeof oParam === "string";
};
/**
 * Determines whether oParam is a Regular Expression
 * @param {*} oParam: The Parameter to check
 * @returns {boolean} - Result
 */
const isRegExp = (oParam) => {
  return oParam instanceof RegExp;
};
/**
 * Determines whether oParam is a boolean
 * @param {*} oParam: The Parameter to check
 * @returns {boolean} - Result
 */
const isBoolean = (oParam) => {
  return typeof oParam === "boolean";
};
/**
 * Determines whether oParam is undefined
 * @param {*} oParam: The Parameter to check
 * @returns {boolean} - Result
 */
const isUndefined = (oParam) => {
  return typeof oParam === "undefined";
};

/**
 * Determines whether oParam is a function
 * @param {*} oParam: The Parameter to check
 * @returns {boolean} - Result
 */
const isFunction = (oParam) => {
  return typeof oParam === "function";
};
/**
 * Determines whether oParam is an object
 * @param {*} oParam: The Parameter to check
 * @returns {boolean} - Result
 */
const isObject = (oParam) => {
  return typeof oParam === "object";
};
/**
 * Determines whether oParam is an array
 * @param {*} oParam: The Parameter to check
 * @returns {boolean} - Result
 */
const isArray = (oParam) => {
  return Array.isArray(oParam);
};
/**
 * Determines whether oParam is null
 * @param {*} oParam: The Parameter to check
 * @returns {boolean} - Result
 */
const isNull = (oParam) => {
  return oParam === null;
};

module.exports = { isNumber, isString, isRegExp, isBoolean, isUndefined , isFunction, isObject, isArray, isNull }
