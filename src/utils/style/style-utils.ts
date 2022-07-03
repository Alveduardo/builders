import { StyleSheet } from 'react-native';
import { STYLE } from './style-consts';
import { externalStylePropType } from './style-types';

/**
 * Removes disallowed style prop properties.
 *
 * @param {externalStylePropType} externalStyleProp The style prop passed to the component to be cleaned.
 * @param {Object} internalStyleProp The style defined internally on the component
 * @param {string[]} customAllowedProperties Array of properties strings to be allowed.
 * @returns {externalStylePropType | undefined} The cleaned style prop
 */

export const setupStyleProp = (
  externalStyleProp: externalStylePropType,
  internalStyleProp?: Object,
  customAllowedProperties?: string[],
): externalStylePropType | undefined => {
  if (externalStyleProp !== undefined && externalStyleProp !== null) {
    let _externalStyleProp: externalStylePropType = externalStyleProp;

    if (Array.isArray(externalStyleProp)) {
      if (externalStyleProp.length > 0) {
        _externalStyleProp = StyleSheet.flatten(_externalStyleProp);
      }
    }

    if (Object.keys(_externalStyleProp).length > 0) {
      let ALLOWED_PROPERTIES: string[] = STYLE.DEFAULT_ALLOWED_PROPERTIES;
      if (customAllowedProperties) {
        ALLOWED_PROPERTIES = ALLOWED_PROPERTIES.concat(customAllowedProperties);
      }

      let newStyleProp: externalStylePropType = {};
      Object.keys(_externalStyleProp).forEach((propKey) => {
        if (!ALLOWED_PROPERTIES.includes(propKey)) {
          throw new Error(
            `Disallowed style property found: ${propKey}.\n\nAllowed properties: \n${ALLOWED_PROPERTIES.toString()
              .split(',')
              .join(',\n')}`,
          );
        }

        //@ts-ignore
        newStyleProp![propKey] = _externalStyleProp![propKey];
      });
      return StyleSheet.flatten([newStyleProp, internalStyleProp]);
    }
    return internalStyleProp;
  }
  return internalStyleProp;
};
