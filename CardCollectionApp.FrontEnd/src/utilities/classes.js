/**
 * Takes an array of classNames, filters out falsey values,
 * then joins them w/ space delimit
 */
export const classes = (classes = []) => {
   return classes
            .filter((_) => _)
            .join(' ')
  }

  /**
   * takes in a prefix and a list of modifiers
   * filters falsey values
   * prepends the prefix
   * joins them as one string
   */
  export const createModifiers = (prefix = '', modifiers = []) => {
    return modifiers
      .filter(_ => _)
      .map((modifier) => ` ${prefix}--${modifier}`)
      .join(' ')
  }

