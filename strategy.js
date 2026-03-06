function analyzeMarket(candles){

if(candles.length<200) return

let closes=candles.map(c=>c.close)

let ema50=EMA(50,closes)
let ema200=EMA(200,closes)

let rsi=RSI(closes)

let macd=MACD(closes)

let price=closes[closes.length-1]

let trend="side"

if(ema50>ema200) trend="up"
if(ema50<ema200) trend="down"

let signal="WAIT"
let confidence=0

if(
trend=="up" &&
rsi<60 &&
macd>0
){

signal="BUY"
confidence=82

}

if(
trend=="down" &&
rsi>40 &&
macd<0
){

signal="SELL"
confidence=82

}

displaySignal(signal,price,confidence)

}
