import { DefaultApi } from 'finnhub';

const finnhubClient = new DefaultApi();
finnhubClient.apiKey = process.env.FINNHUB_API_KEY;

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get('symbol') || 'AAPL';


    try {
        const [trends, profile] = await Promise.all([
            new Promise((resolve, reject) =>
                finnhubClient.recommendationTrends(symbol, (err, data) =>
                    err ? reject(err) : resolve(data)
                )
            ),
            new Promise((resolve, reject) =>
                finnhubClient.companyProfile2({ symbol }, (err, data) =>
                    err ? reject(err) : resolve(data)
                )
            )
        ]);

        return Response.json({ trends, companyName: profile.name});
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}