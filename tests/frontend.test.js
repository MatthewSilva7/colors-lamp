const validateHex = (hex) => /^#[0-9A-F]{6}$/i.test(hex);

test('validates correct hex color codes', () => {
  expect(validateHex('#FFFFFF')).toBe(true);
  expect(validateHex('#000')).toBe(false);
});
