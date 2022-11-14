/**
 * Generate a table of contents from `tree`.
 *
 * Looks for the first heading matching `options.heading` (case insensitive) and
 * returns a table of contents (a list) for all following headings.
 * If no `heading` is specified, creates a table of contents for all headings in
 * `tree`.
 * `tree` is not changed.
 *
 * Links in the list to headings are based on GitHub’s style.
 * Only top-level headings (those not in blockquotes or lists), are used.
 * This default behavior can be changed by passing `options.parents`.
 *
 * @param {Node} node
 * @param {Options} [options]
 * @returns {Result}
 */
export function toc(node: Node, options?: Options | undefined): Result
export type Node = import('mdast').Root | import('mdast').Content
export type List = import('mdast').List
export type SearchOptions = import('./search.js').SearchOptions
export type ContentsOptions = import('./contents.js').ContentsOptions
export type Options = SearchOptions & ContentsOptions & ExtraOptions
export type ExtraOptions = {
  /**
   * Heading to look for, wrapped in `new RegExp('^(' + value + ')$', 'i')`.
   */
  heading?: string | undefined
}
export type Result = {
  index: number | null
  endIndex: number | null
  map: List | null
}
