import nextPlugin from "@next/eslint-plugin-next";

const eslintConfig = [
  nextPlugin.configs["core-web-vitals"],
  {
    ignores: ["node_modules/", ".next/", "out/"],
  },
];

export default eslintConfig;
