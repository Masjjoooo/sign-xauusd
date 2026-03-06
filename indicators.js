function EMA(period,data){

let k=2/(period+1)
let ema=data[0]

for(let i=1;i<data.length;i++){

ema=data[i]*k + ema*(1-k)

}

return ema

}

function RSI(data,period=14){

let gains=0
let losses=0

for(let i=data.length-period;i<data.length;i++){

let diff=data[i]-data[i-1]

if(diff>0) gains+=diff
else losses+=Math.abs(diff)

}

let rs=gains/losses

return 100-(100/(1+rs))

}

function MACD(data){

let ema12=EMA(12,data)
let ema26=EMA(26,data)

return ema12-ema26

}
