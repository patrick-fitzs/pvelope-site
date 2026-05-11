'use client'
import { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    LabelList,
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid
} from "recharts";

const my_favs_right_now = [
    { ticker: 'RYCEF',  label: 'Rolls Royce',  reason: 'Defence & aerospace turnaround thanks to the turkish legend himself' },
    { ticker: 'AAPL',  label: 'Apple',         reason: 'Apple are apple' },
    { ticker: 'NVDA',  label: 'Nvidia',        reason: 'The big dogs that do 10 deals a day' },
    { ticker: 'GOOGL', label: 'Alphabet',      reason: 'That bad press took the wind out of these guys' },
    { ticker: 'ORCL', label: 'Oracle',         reason: 'From $340 -> $140? Take my money!' },
    { ticker: 'BTI', label: 'British American Tobacco', reason: 'Quarterly dividend? yes' },
    { ticker: 'AMD', label: 'Advanced Micro Devices', reason: 'Lisa Su, only a matter of time before they had their moment (RIP $80 Shares)' }
];

// works out the overall consensus from the latest month
function getSentiment(trends) {
    if (!trends.length) return null;
    const latest = [...trends].sort((a, b) => b.period.localeCompare(a.period))[0];
    const scores = {
        'Strong Buy':  latest.strongBuy  * 2,
        'Buy':         latest.buy        * 1,
        'Hold':        latest.hold       * 0,
        'Sell':        latest.sell       * -1,
        'Strong Sell': latest.strongSell * -2,
    };
    const total = latest.strongBuy + latest.buy + latest.hold + latest.sell + latest.strongSell;
    const score = Object.values(scores).reduce((a, b) => a + b, 0) / total;
    if (score >  1)   return { label: 'Strong Buy',  color: '#1a7a3c' };
    if (score >  0.2) return { label: 'Buy',          color: '#4caf50' };
    if (score > -0.2) return { label: 'Hold',         color: '#f0a500' };
    if (score > -1)   return { label: 'Sell',         color: '#e05c2a' };
    return                   { label: 'Strong Sell',  color: '#8b1a1a' };
}




export default function TravelFund() {
    const [symbol, setSymbol] = useState('');
    const [trends, setTrends] = useState([]);
    const [companyName, setCompanyName] = useState('');
    const [prices, setPrices] = useState([]);



    function handleFetch(ticker) {
        const upper = (ticker || symbol).toUpperCase();
        setSymbol(upper);

        Promise.all([
            fetch(`/api/finnhub-analyst-ratings?symbol=${upper}`).then(r => r.json()),
            fetch(`/api/stock-price?symbol=${upper}`).then(r => r.json())
        ]).then(([ratingsData, priceData]) => {
            setTrends(ratingsData.trends || []);
            setCompanyName(ratingsData.companyName || upper);
            setPrices(priceData || []);
        }).catch(console.error);
    }


// call the function for use below
    const sentiment = getSentiment(trends);


    return (

        <main className="min-h-screen p-10 pt-24 flex flex-col items-center">
            <h1 className="text-white text-2xl mb-6">Stock Watch</h1>
            <h3 className="text-white mb-6">Maybe your favourite stock can fund your next trip?</h3>
            <p className="mt-6 mb-10"> Have a look at the latest analyst ratings here</p>

            {/*search input and button */}
            <div className="flex gap-2 mb-8">
                <input
                    value={symbol}
                    onChange={e => setSymbol(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleFetch()}
                    placeholder="Enter ticker e.g. RCYEF, ORCL"
                    className="bg-transparent border border-white text-white p-2 rounded w-64"
                />
                <button onClick={handleFetch} className="text-white border border-white p-2 rounded px-4"> Search </button>
            </div>
            <p className="text-sm italic text-gray-600" >** pls... this is not financial advice</p>


            {/* my stocks to look at section, for now anyway */}
            <div className="mb-10 w-full max-w-7xl">
                <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-400 text-sm">Eyes on right now:</p>
                    <p className="text-gray-400 text-sm">Click one below for magic</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {my_favs_right_now.map(pick => (
                        <button
                            key={pick.ticker}
                            onClick={() => handleFetch(pick.ticker)}
                            className="bg-[#1a1a1a] border border-gray-600 rounded-lg px-4 py-2 text-left hover:border-white transition-all"
                        >

                            <p className="text-white text-sm font-medium">{pick.label}</p>
                            <p className="text-gray-400 text-xs">{pick.reason}</p>
                        </button>
                    ))}
                </div>
            </div>


            {/* bar chart show after search */}
            {trends.length > 0 && (

                <>
                    {sentiment && (
                        <div className="mb-6 text-center">
                            <p className="text-gray-400 text-sm">Latest analyst consensus for <span className="text-white">{companyName}</span></p>
                            <p className="text-2xl font-bold mt-1" style={{ color: sentiment.color }}>{sentiment.label}</p>
                        </div>
                    )}

                    <div className="flex flex-row gap-6 w-full max-w-7xl">

                        {/* Price chart */}
                        <div className="bg-[#1a1a1a] rounded-lg p-6 flex-1">
                            <h2 className="text-white text-center text-lg mb-4">
                                {companyName} Stock Price
                            </h2>
                            <ResponsiveContainer width="100%" height={350}>
                                <LineChart data={prices}>
                                    <CartesianGrid stroke="#333" />
                                    <XAxis dataKey="period" stroke="#aaa" tick={{ fontSize: 12 }} />
                                    <YAxis stroke="#aaa" tick={{ fontSize: 12 }} domain={['auto', 'auto']} />
                                    <Tooltip formatter={(val) => `$${val}`} />
                                    <Line type="monotone" dataKey="price" stroke="#4caf50" strokeWidth={2} dot={{ fill: '#4caf50' }} />
                                </LineChart>
                            </ResponsiveContainer>
                            <p className="text-gray-400 text-center text-xs mb-4">** Weekly open price</p>
                        </div>


                        {/* Recommendations chart */}
                        <div className="bg-[#1a1a1a] rounded-lg p-6 flex-1">
                            <h2 className="text-white text-center text-lg mb-4">
                                {companyName} Recommendation Trends
                            </h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={[...trends].reverse()} barCategoryGap="30%">
                                    <XAxis dataKey="period" stroke="#aaa" tick={{ fontSize: 12 }} tickFormatter={(val) => val.slice(0, 7)} />
                                    <YAxis stroke="#aaa" tick={{ fontSize: 12 }} />
                                    <Tooltip />
                                    <Legend wrapperStyle={{ fontSize: 12 }} />
                                    <Bar dataKey="strongBuy"  name="Strong Buy"  stackId="a" fill="#1a7a3c">
                                        <LabelList dataKey="strongBuy"  position="inside" style={{ fill: '#fff', fontSize: 11 }} />
                                    </Bar>
                                    <Bar dataKey="buy"        name="Buy"         stackId="a" fill="#4caf50">
                                        <LabelList dataKey="buy"        position="inside" style={{ fill: '#fff', fontSize: 11 }} />
                                    </Bar>
                                    <Bar dataKey="hold"       name="Hold"        stackId="a" fill="#f0a500">
                                        <LabelList dataKey="hold"       position="inside" style={{ fill: '#fff', fontSize: 11 }} />
                                    </Bar>
                                    <Bar dataKey="sell"       name="Sell"        stackId="a" fill="#e05c2a">
                                        <LabelList dataKey="sell"       position="inside" style={{ fill: '#fff', fontSize: 11 }} />
                                    </Bar>
                                    <Bar dataKey="strongSell" name="Strong Sell" stackId="a" fill="#8b1a1a" radius={[4, 4, 0, 0]}>
                                        <LabelList dataKey="strongSell" position="inside" style={{ fill: '#fff', fontSize: 11 }} />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                            <p className="text-gray-400 text-center text-xs mb-4">** Analyst consensus at start of month</p>
                            <p className="text-gray-500 text-center text-xs mt-4">
                                Data sourced from Finnhub — aggregated analyst recommendations
                            </p>
                        </div>
                    </div>
                </>
                )}
        </main>
    );
}
