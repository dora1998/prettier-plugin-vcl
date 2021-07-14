import type { Plugin } from "prettier";
import { parser } from "./parser";
import { printer } from "./printer";
import { AST } from "./types";

const plugin: Plugin<AST> = {
  languages: [
    {
      name: "VCL",
      parsers: ["vcl-parse"],
      extensions: [".vcl"],
      vscodeLanguageIds: ["vcl"],
      linguistLanguageId: 384,
    },
  ],
  parsers: {
    "vcl-parse": parser,
  },
  printers: {
    "vcl-ast": printer,
  },
  defaultOptions: {
    tabWidth: 2,
  },
};

module.exports = plugin;
