import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Disable unescaped entities warning
      "next/no-img-element": "off", // Disable the img element warning
      "no-unused-vars": "off", // Disable unused variables warning
    },
  },
];

export default eslintConfig;
