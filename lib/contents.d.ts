/**
 * Transform a list of heading objects to a markdown list.
 *
 * @param {Array<SearchEntry>} map
 * @param {ContentsOptions} settings
 */
export function contents(
  map: Array<SearchEntry>,
  settings: ContentsOptions
): ListWithProperties
export type Node = import('mdast').Root | import('mdast').Content
export type List = import('mdast').List
export type ListItem = import('mdast').ListItem
export type PhrasingContent = import('mdast').PhrasingContent
export type StaticPhrasingContent = import('mdast').StaticPhrasingContent
export type SearchEntry = import('./search.js').SearchEntry
export type HProperties = import('hast').Properties
export type ListWithProperties = List & {
  data?: HProperties
}
export type ContentsOptions = {
  /**
   * Whether to compile list-items tightly.
   */
  tight?: boolean | undefined
  /**
   * Whether to compile list-items as an ordered list, otherwise they are
   * unordered.
   */
  ordered?: boolean | undefined
  /**
   * Add a prefix to links to headings in the table of contents.
   * Useful for example when later going from mdast to hast and sanitizing with
   * `hast-util-sanitize`.
   */
  prefix?: string | null | undefined
  /**
   * Add a prefix to links to headings in the table of contents.
   */
  parentListMdastDataProps?: import('hast').Properties | undefined
}
