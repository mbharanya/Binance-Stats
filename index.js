const Binance = require('node-binance-api');
const Table = require('cli-table3');
const clc = require("cli-color");

const APIKEY = process.env.BINANCE_API_KEY
const APISECRET = process.env.BINANCE_API_SECRET

if (!APIKEY || !APISECRET) {
    console.error('Please set BINANCE_API_KEY and BINANCE_API_SECRET in your environment variables')
    process.exit(1)
}

const binance = new Binance().options({
    APIKEY: APIKEY,
    APISECRET: APISECRET
});

Object.filter = (obj, predicate) =>
    Object.keys(obj)
        .filter(key => predicate(obj[key]))
        .reduce((res, key) => (res[key] = obj[key], res), {});


binance.balance(async (error, balances) => {
    if (error) return console.error(error);
    const currentCurrencies = Object.filter(balances, c => c.available > 0)
    const currentPrices = await binance.prices();

    const prevDayChange = await new Promise((resolve, reject) =>
        binance.prevDay(false, (error, prevDay) => {
            if (error) reject(error)
            resolve(prevDay)
        })
    )

    const pricesOfCurrencies = Object.keys(currentCurrencies).map(k => {
        const coinAmount = balances[k].available
        return {
            "coin": k,
            "coinAmount": coinAmount,
            "usdT": currentPrices[k + "USDT"] * coinAmount,
            "prevDayChangePercentage": prevDayChange.find(c => c.symbol == k + "USDT").priceChangePercent
        }
    })

    const sorted = pricesOfCurrencies.sort((p1, p2) => p2.usdT - p1.usdT)

    const total = sorted.map(_ => _.usdT).reduce((a, b) => a + b, 0)

    const table = new Table({
        head: ['Coin', 'Amount', 'USD', '24 Change'],
        colWidths: [10, 20, 15, 15],
        style: { 'head': 'white', 'padding-top': 0, 'padding-bottom': 0 }
    });
    

    sorted.forEach(c => 
        table.push([
            c.coin,
            c.coinAmount,
            Math.round(c.usdT * 100) / 100,
            `${c.prevDayChangePercentage > 0 ? "+" + clc.green(c.prevDayChangePercentage) : clc.red(c.prevDayChangePercentage)}%`
        ])
    )
    table.push(["💰Total","", `${Math.round(total * 100) / 100} USD`, ""])

    console.log(table.toString());
});
