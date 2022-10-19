import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

ccBgColor01.setAttribute("fill", "green")
ccBgColor02.setAttribute("fill", "blue")

const colors = {
  "visa": ["#436D99", "#2D57F2"],
  "mastercard": ["#Df6F29", "#C69347"],
  "default": ["black", "gray"]
}


function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#Df6F29", "#C69347"],
    default: ["black", "gray"],
  }

  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

globalThis.setCardType = setCardType


const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
  mask: "0000"
}
const securityCodeMasked = IMask(securityCode, securityCodePattern)


const expirationDate = document.querySelector("#expiration-date")
const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2), //Slice = Fatiar para pegar os dois ultimos digitos do ano atual
      to: String(new Date().getFullYear() + 10).slice(2) // Colocando + 10 anos no ano atual
    },
    MM: {
      mask: IMask.MaskedRange,
      from:1,
      to:12
    }
  }
}

const expirationDateMasked = IMask(expirationDate, expirationDatePattern)

const cardNumber = document.querySelector("#card-number")
const cardNumberPattern = {
  mask: "0000 0000 0000 0000"
}

const cardNumberMasked = IMask(cardNumber, cardNumberPattern)

