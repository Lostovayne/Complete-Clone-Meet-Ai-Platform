import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, {
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
  },
}, {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", "src/components/ui/**"]
}];

export default eslintConfig;
