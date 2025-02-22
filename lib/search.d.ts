/**
 * Search a node for a toc.
 *
 * @param {Node} root
 * @param {RegExp|null} expression
 * @param {SearchOptions} settings
 * @returns {SearchResult}
 */
export function search(
  root: Node,
  expression: RegExp | null,
  settings: SearchOptions
): SearchResult
export type Node = import('mdast').Root | import('mdast').Content
export type Heading = import('mdast').Heading
export type PhrasingContent = import('mdast').PhrasingContent
export type IsType = import('unist-util-is').Type
export type IsProps = import('unist-util-is').Props
export type IsTestFunctionAnything =
  import('unist-util-is').TestFunctionAnything
export type SearchOptions = {
  /**
   * Headings to skip, wrapped in `new RegExp('^(' + value + ')$', 'i')`.
   * Any heading matching this expression will not be present in the table of
   * contents.
   */
  skip?: string | undefined
  /**
   * Allow headings to be children of certain node types (default: the to `toc`
   * given `tree`, to only allow top-level headings).
   * Internally, uses `unist-util-is` to check, so `parents` can be any
   * `is`-compatible test.
   */
  parents?:
    | string
    | import('unist-util-is').Props
    | import('unist-util-is').TestFunctionAnything
    | (
        | string
        | import('unist-util-is').Props
        | import('unist-util-is').TestFunctionAnything
      )[]
    | undefined
  /**
   * Maximum heading depth to include in the table of contents.
   * This is inclusive: when set to `3`, level three headings are included
   * (those with three hashes, `###`).
   */
  maxDepth?: 1 | 2 | 3 | 4 | 5 | 6 | undefined
}
export type SearchEntry = {
  depth: Heading['depth']
  children: Array<PhrasingContent>
  id: string
}
export type SearchResult = {
  index: number
  endIndex: number
  map: Array<SearchEntry>
}
