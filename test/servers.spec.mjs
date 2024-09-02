import { readFileSync } from "fs";
import Ajv from "ajv";
import { parse } from "toml";
import assert from "assert";

const data = parse(readFileSync("servers.toml", "utf-8"));
const schema = JSON.parse(readFileSync("test/schema.json", "utf-8"));

const ajv = new Ajv();

function getErrors(errors) {
  return errors.map((error) => `${error.instancePath} ${error.message}`).join(". ");
}

it("every server follows the requires schema", () => {
  const validate = ajv.compile(schema);
  assert(validate(data), "servers.toml:1:1:error:" + getErrors(validate.errors));
});

function validateUrl(url) {
  // Very weak validation but we don't require any better
  return url.startsWith("http") || url.startsWith("icons/");
}

it("every server has a valid url", () => {
  const servers = data?.servers || [];
  let error = null;
  assert(
    servers.every((server) => validateUrl(server.url) || ((error = server.url), false)),
    `servers.toml:1:1:error:Invalid URL "${error}"`
  );
});
