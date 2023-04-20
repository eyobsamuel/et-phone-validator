export default etPhone;
/**
 * A phone validation function for Ethiopian ethio-telecom and Safari numbers that takes
 * any phone number and type of a phone numbers,
 * and returns true when it is valid or false when it is invalid.
 *
 * @param {any}     phone - A nested objects.
 * @param {string}  "all" | "mobile" | "home" | "special" | "shortCode" - A path string, for example `my[1].test.field`
 * @param {boolean} [shouldThrow=false] - Optionally throw an exception when nothing found
 *
 */

type PhoneType = "all" | "mobile" | "home" | "special" | "shortCode";
type ProviderType = "all" | "ethioTelecom" | "safaricom";
type PhoneTypes = Array<PhoneType>;

function etPhone(
  phone: string | number,
  type: PhoneTypes = ["mobile", "home"],
  provider: ProviderType = "all"
) {
  const phoneNumRegex =
    /^\+?(251)?[79]\d{8}$|^\+?(251)?[17]\d{8}$|^\+?09\d{8}$|^\+?07\d{8}$|^\+?7\d{8}$/;
  const phoneNum = phone.toString().split(' ').join('').split('-').join('');
  if (provider === "all") {
    if (type.includes("mobile")) return phoneNumRegex.test(phoneNum);
    else return false;
  }
  else
    return false
}
