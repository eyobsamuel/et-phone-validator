import etPhone from "./index";

test("validates ethiopian mobile phone numbers", () => {
  expect(etPhone("+251911 23 45 67")).toBe(true);
  expect(etPhone("+251 911 23 45 67")).toBe(true);
  expect(etPhone("+251 711 23 45 67")).toBe(true);
  expect(etPhone("251 711 23 45 67")).toBe(true);
  expect(etPhone("251 711 23 45 67")).toBe(true);
  expect(etPhone("0911 23 45 67")).toBe(true);
  expect(etPhone("0711 23 45 67")).toBe(true);
  expect(etPhone("911 23 45 67")).toBe(true);
  expect(etPhone("711 23 45 67")).toBe(true);
  expect(etPhone("0911 23 45 678")).toBe(false);
  expect(etPhone("0711 23 45 678")).toBe(false);
  expect(etPhone("911 23 45 678")).toBe(false);
  expect(etPhone("711 23 45 678")).toBe(false);
  expect(etPhone("+2510911 23 45 67")).toBe(false);
  expect(etPhone("+2510711 23 45 67")).toBe(false);
});
