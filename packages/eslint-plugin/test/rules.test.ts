import { RuleTester } from "eslint";
import { noUnusedIcons } from "../src/rules/no-unused-icons.ts";
import { preferNamedImport } from "../src/rules/prefer-named-import.ts";

const tester = new RuleTester({
  languageOptions: { ecmaVersion: 2022, sourceType: "module" },
});

tester.run("prefer-named-import", preferNamedImport, {
  valid: [
    { code: 'import { FiActivity } from "@mal-icon/react/fi";' },
    { code: 'import React from "react";' },
    { code: 'import * as path from "node:path";' },
  ],
  invalid: [
    {
      code: 'import Icons from "@mal-icon/react/fi";',
      errors: [{ messageId: "named" }],
    },
    {
      code: 'import * as Icons from "@mal-icon/vue/fi";',
      errors: [{ messageId: "named" }],
    },
  ],
});

tester.run("no-unused-icons", noUnusedIcons, {
  valid: [
    { code: 'import { FiActivity } from "@mal-icon/react/fi";\nFiActivity();' },
    { code: 'import { useState } from "react";' },
  ],
  invalid: [
    {
      code: 'import { FiActivity } from "@mal-icon/react/fi";',
      errors: [{ messageId: "unused" }],
    },
    {
      code: 'import { FiActivity, FiAirplay } from "@mal-icon/react/fi";\nFiActivity();',
      errors: [{ messageId: "unused" }],
    },
  ],
});
