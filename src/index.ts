import type { Plugin } from "prettier";

// TODO
const parser: any = {};
const printer: any = {};

const plugin: Plugin<any> = {
  languages: [
    {
      name: "VCL",
      parsers: ["vcl"],
      extensions: [".vcl"],
      vscodeLanguageIds: ["vcl"],
      linguistLanguageId: 384,
    },
  ],
  parsers: {
    vcl: parser,
  },
  printers: {
    vcl: printer,
  },
  defaultOptions: {
    printWidth: 80,
    tabWidth: 2,
  },
};

export default plugin;
