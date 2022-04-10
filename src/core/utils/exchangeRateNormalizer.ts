export default (exchangeRate: number) => {

    const convertedToStr = String(exchangeRate)
  
    const normalized = convertedToStr.match(/(.+)\.([0-9]{1,3})/g)
  
    return normalized ? Number(normalized.pop()): exchangeRate
  }
  