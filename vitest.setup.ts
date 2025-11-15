import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

console.log(">>> VITEST SETUP LOADED");

afterEach(() => {
  cleanup();
});
