import prettier from "prettier";
import fs from "fs";
import path from "path";

const code = fs
  .readFileSync(path.join(__dirname, "../examples/boilerplate.vcl"))
  .toString();
prettier.format(code, {
  parser: "vcl-parse",
  plugins: ["."],
});
