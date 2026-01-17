import "./src/app/styles/globals.css";
import "@hgcle/ui-library/globals.css";

import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});
