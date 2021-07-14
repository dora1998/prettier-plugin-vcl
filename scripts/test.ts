import prettier from "prettier";
const code = `
sub vcl_recv {
declare local var.vacelinDebug STRING;
set var.vacelineDebug = "initial";

if (req.http.Vacelin:Some == "Some") {
    add var.vacelinDebug = "Vacelin Debug Log";
  }
}
`;
prettier.format(code, {
  parser: "vcl",
  plugins: ["."],
});
