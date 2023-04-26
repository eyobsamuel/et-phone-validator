/**
 * A phone validation function for Ethiopian Ethio-telecom and Safaricom numbers that takes
 * any phone number and type of a phone numbers,
 * and returns true when it is valid or false when it is invalid.
 *
 * @param {string | number} - Phone number
 * @param {"all" | "mobile" | "fixedLine" | "special" | "shortCode" []} [type= "mobile", "fixedLine"] - Phone number type
 * @param {"all" | "ethioTelecom" | "safaricom" []} [provider="all"] - Phone number provider. 
 * @returns {{isValid, phoneNumber, provider, phoneType, countryIso2, countryIso3, countryCode}} - Phone number information
 * 
 */

import { addCountryCode, extractNumber, ethioTelecomFixedLineRegex, globalResponse, checkEthioTelecomFixedLine } from "./util"

function etPhone(
  phone: string | number,
  type: Array<"all" | "mobile" | "fixedLine" | "special" | "shortCode"> = ["mobile", "fixedLine"],
  provider: Array<"all" | "ethioTelecom" | "safaricom"> = ["all"]
) {
  const phoneNum = extractNumber(phone.toString())
  const phoneWithAreaCode = addCountryCode(phoneNum)
  console.log(phoneNum, phoneWithAreaCode);
  
  const ethioTelecomMobileRegex = /^\+?(251)?9\d{8}$/;
  const ethioTelecomSpecialRegex = /^\d{4}$/;
  const ethioTelecomShortCodeRegex = /^\d{3}$/;
  const safaricomMobileRegex = /^\+?(251)?7\d{8}$/;

  if (
    ethioTelecomMobileRegex.test(phoneWithAreaCode) &&
    (type.includes("mobile") ||
      type.includes("all")) &&
    (provider.includes("all") || provider.includes("ethioTelecom"))
  )
    return {
      isValid: true,
      phoneNumber: phoneWithAreaCode,
      provider: "Ethio telecom",
      phoneType: "Mobile",
      ...globalResponse
    };
  else if (
    safaricomMobileRegex.test(phoneWithAreaCode) &&
    (type.includes("mobile") ||
      type.includes("all")) &&
    (provider.includes("all") || provider.includes("safaricom"))
  )
    return {
      isValid: true,
      phoneNumber: phoneWithAreaCode,
      provider: "Safaricom",
      phoneType: "Mobile",
      ...globalResponse
    };
  else if (
    ethioTelecomSpecialRegex.test(phoneNum) &&
    (type.includes("special") ||
      type.includes("all")) &&
    (provider.includes("all") || provider.includes("ethioTelecom"))
  )
    return {
      isValid: true,
      phoneNumber: phoneNum,
      provider: "Ethio telecom",
      phoneType: "Special",
      ...globalResponse
    };
  else if (
    ethioTelecomShortCodeRegex.test(phoneNum) &&
    (type.includes("shortCode") ||
      type.includes("all")) &&
    (provider.includes("all") || provider.includes("ethioTelecom"))
  )
    return {
      isValid: true,
      phoneNumber: phoneNum,
      provider: "Ethio telecom",
      phoneType: "Short Code",
      ...globalResponse
    };
  else if (
    ethioTelecomShortCodeRegex.test(phoneNum) &&
    (type.includes("shortCode") ||
      type.includes("all")) &&
    (provider.includes("all") || provider.includes("ethioTelecom"))
  )
    return {
      isValid: true,
      phoneNumber: phoneNum,
      provider: "Ethio telecom",
      phoneType: "Short Code",
      ...globalResponse
    };
  else if (checkEthioTelecomFixedLine(phoneWithAreaCode, ethioTelecomFixedLineRegex)) {
    return {
      isValid: true,
      phoneNumber: phoneWithAreaCode,
      provider: "Ethio telecom",
      phoneType: "Fixed-line",
      ...globalResponse
    };
  }
  else {
    return { isValid: false };
  }
}

export default etPhone;

