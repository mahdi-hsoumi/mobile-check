const isMobile = require("./isMobile");

test("should detect iPhone as mobile", () => {
  const ua =
    "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1";
  expect(isMobile(ua)).toBe(true);
});

test("should detect Windows 10 as non-mobile", () => {
  const ua =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3";
  expect(isMobile(ua)).toBe(false);
});

test("should detect Android device as mobile", () => {
  const ua =
    "Mozilla/5.0 (Linux; Android 7.0; Nexus 5X Build/NBD90W) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36";
  expect(isMobile(ua)).toBe(true);
});

test("should detect iPad as mobile", () => {
  const ua =
    "Mozilla/5.0 (iPad; CPU OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1";
  expect(isMobile(ua)).toBe(true);
});

test("should detect Chrome on Mac as non-mobile", () => {
  const ua =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36";
  expect(isMobile(ua)).toBe(false);
});
