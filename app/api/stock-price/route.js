export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get('symbol') || 'AAPL';

    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1wk&range=4mo`;


    try {
        const res = await fetch(url);
        const json = await res.json();

        const timestamps = json.chart.result[0].timestamp;
        const opens = json.chart.result[0].indicators.quote[0].open;

        const data = timestamps.map((t, i) => ({
            period: new Date(t * 1000).toISOString().slice(0, 7),
            price: parseFloat(opens[i].toFixed(2))
        }));

        return Response.json(data);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}