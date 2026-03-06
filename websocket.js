async function getPrice(){

const res = await fetch("https://api.gold-api.com/price/XAUUSD")
const data = await res.json()

return data.price

}
