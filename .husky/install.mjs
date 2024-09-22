// ./.husky/install.mjs
//
// Official instructions on omitting husky from production builds.
if (process.env.NODE_ENV === "production" || process.env.CI) {
  console.log("Husky omitted in production or CI environments");
  process.exit(0);
}

const husky = (await import("husky")).default;
console.log("Husky installed");
console.log(husky());
