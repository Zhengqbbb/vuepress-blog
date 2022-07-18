/** @type {import('cz-git').UserConfig} */
module.exports = {
  prompt: {
    alias: {
      b: "chore: bump dep version",
      c: "chore: update config",
      f: "docs: fix typos",
      ":": "docs(blog): update post",
    },
    scopes: ["blog", "theme"],
    skipQuestions: ["body", "breaking"],
  },
};
