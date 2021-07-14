import { AstPath, Doc, Printer } from "prettier";
import { Program } from "vaceline/dist/nodes";
import { printNode } from "vaceline/dist/generator/printAST";
import { AST } from "./types";

function print(path: AstPath<Program>): Doc {
  console.log(path);
  return printNode(path.getValue(), {
    lineNum: 1,
  });
}

export const printer: Printer<AST> = {
  print,
};
