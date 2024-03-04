const assert = require("assert");

module.exports = maxstache;

const defaultPattern = "{{\\s*([^{}\\s]+)\\s*}}";

// Minimalist mustache template replacement
// (str, obj) -> null
function maxstache(str, ctx, pattern = defaultPattern) {
  ctx = ctx || {};

  assert.equal(typeof str, "string");
  assert.equal(typeof ctx, "object");
  assert.equal(typeof pattern, "string");

  return replaceTemplateVars(str, ctx, pattern);
}

function replaceTemplateVars(templateStr, params, pattern = defaultPattern) {
  // Construct the regular expression using the passed-in pattern. If no pattern is provided, then use the default value.
  const regex = new RegExp(pattern, "g");

  return templateStr.replace(regex, (match, p1) => {
    return params[p1] || match;
  });
}
