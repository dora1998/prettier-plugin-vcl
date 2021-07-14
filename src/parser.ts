import { Parser, ParserOptions } from "prettier";
import { transform } from "vaceline";
import { AST } from "./types";

function parse(
  text: string,
  _parsers: {
    [parserName: string]: Parser<AST>;
  },
  options: ParserOptions<AST>
): AST {
  const transformResult = transform(text, options);
  return transformResult.ast;
}

function locStart(node: AST): number {
  if (!node.loc) {
    throw new Error("No loc in node! (locStart)");
  }
  return node.loc.start.offset;
}

function locEnd(node: AST): number {
  if (!node.loc) {
    throw new Error("No loc in node! (locEnd)");
  }
  return node.loc.end.offset;
}

export const parser: Parser<AST> = {
  parse,
  astFormat: "vcl-ast",
  locStart,
  locEnd,
};
