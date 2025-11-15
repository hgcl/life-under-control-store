// Jest cannot run ESM-only modules such as `next-sanity`. So we Ignore Sanity code by mapping to this empty mock file.
//
// 1. importing next-sanity returns {}
// 2. importing anything under sanity/ returns {}
// 3. Jest stops trying to interpret Sanity’s ESM code, and UI tests continue running normally

module.exports = {};
