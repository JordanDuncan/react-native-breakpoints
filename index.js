import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const isSmall = width < 350;
export const isMedium = width >= 350 && width < 395;
export const isLarge = width >= 395;

/**
* @typedef {Object} SelectMapping
* @type Object
*
* @property {Object} small
* @property {Object} medium
* @property {Object} large
* @property {Object} default
**/

/**
 * Given a mapping, returns object appropriate for device screen size
 * @param {SelectMapping} values
 * @returns {Object}
 */
export function select (values) {
  if (isSmall && values.small) {
    return values.small;
  }

  if (isMedium && values.medium) {
    return values.medium;
  }

  if (isLarge && values.large) {
    return values.large;
  }

  return values.default || {};
}
