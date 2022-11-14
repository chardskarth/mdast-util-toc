export type Root = import('mdast').Root;
export type Blockquote = import('mdast').Blockquote;
export type List = import('mdast').List;
export type Options = import('../index.js').Options;
export type TestConfig = {
    useCustomHProperty?: boolean | undefined;
};
export type Config = Options & TestConfig;
