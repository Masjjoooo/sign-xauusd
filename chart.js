const chart = LightweightCharts.createChart(document.getElementById('chart'),{

width:window.innerWidth-20,
height:500,

layout:{
background:{color:"#0f172a"},
textColor:"#DDD"
}

})

const candleSeries = chart.addCandlestickSeries()

let candles=[]

async function update(){

let price=await getPrice()

let time=Math.floor(Date.now()/1000)

let candle={
time:time,
open:price,
high:price,
low:price,
close:price
}

candles.push(candle)

if(candles.length>500) candles.shift()

candleSeries.setData(candles)

analyzeMarket(candles)

}

setInterval(update,5000)

function displaySignal(type,price,conf){

let s=document.getElementById("signal")
let entry=document.getElementById("entry")
let tp1=document.getElementById("tp1")
let tp2=document.getElementById("tp2")
let sl=document.getElementById("sl")
let cf=document.getElementById("conf")

entry.innerHTML=price.toFixed(2)

if(type=="BUY"){

s.innerHTML="BUY"
s.className="buy"

tp1.innerHTML=(price+3).toFixed(2)
tp2.innerHTML=(price+6).toFixed(2)
sl.innerHTML=(price-3).toFixed(2)

}

if(type=="SELL"){

s.innerHTML="SELL"
s.className="sell"

tp1.innerHTML=(price-3).toFixed(2)
tp2.innerHTML=(price-6).toFixed(2)
sl.innerHTML=(price+3).toFixed(2)

}

cf.innerHTML=conf+"%"

}
