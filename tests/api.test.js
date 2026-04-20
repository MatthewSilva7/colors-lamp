const mockApiResponse = {
  status: "success",
  data: { color: "Blue", hex: "#0000FF" }
};

test('API response has expected structure', () => {
  expect(mockApiResponse).toHaveProperty('status');
  expect(mockApiResponse.data).toHaveProperty('hex');
});
