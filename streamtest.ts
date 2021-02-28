import StreamData, {
    CHART_HISTORY_FUTURES_FREQUENCY,
    IStreamConfig,
    IStreamNotify,
    QOS_LEVELS
} from './src/streaming/streamdata';

async function doShit() {
    const streamConfig : IStreamConfig = {
        authConfig: {
            "refresh_token": "SrgS0QJKDjTyCbIXPgg0qyENU/Y5l0kt6ZGNwouuJhevNAShEbMvrbhWRhjDKKe+iiposfLi0lW0EY9kxkb+k1Xuu8tSYbi2fdMqGNLSk4VTVVFAMa6YYoCnpSwUc28D3F9TAgmd0U+iFL/40iLK8QHQLH/Sauc4NjlGoKuEDhnS2BSvNLzjULJVUEluvDM/3sB3Y43ENy48BbOZgAvDHhMvKS5RLg9WsFZ5w0kk1etPxrXcngPvVuQ/dBfkTHkHzmuKlOJXw59VryRBB2bXQ15G5oDM94hDcSLFJTSG517mUueiRIwwvQLUu6VfzirZN8k+I9iVTL+ys97Wapt0u1XKDVNsR8P5lcfJ4LO5wm7CJxpdPleqt54qtM7OyI+KRCFWNzEMyWfsw34nWVqdbu9hjx8ZxD2ZE3LL6spVe/SU6N6zDIPPGQo708u100MQuG4LYrgoVi/JHHvlW7f8RXX4wSB0FdMIryQbtFEeunFYpbva18OaviXBwS8rfeYQeU73M+N2xrpUA2mRgQ5xuHRTrw6p/Qj4zfiWVkPTn81ejZx2Ftih9/0VkwVJH1+xISE9kefu2FKfv/WAty7QAS3G3NKlUnJFBvXFG13uV3rrXXFS0OZ8Z3jgc0zbLlw9PtgwQwYJVRHrPXwjN4w65CU2IuSDyLdjQwmvNiVq4EowCcwTdDziXnAAOybLudpgQT0OyWT6/rTMrKAZjJQHLRyEi/j+uP1cInPhBIUjvBSiGxkDqTwt2VH5Vz+JbUwk4FeoAdY/GakUqMhTu1c50ASg8nmGRsXz1QB6sXcgnaUrpygVDybBINBX0tj+NNeiXOa/VsjiVSFrgVtgMbuJXUnLJMet8+VjV48wpqfk8nh2DZgsnBMAQGK2QejaeBd7E4uCRHUg0gw=212FD3x19z9sWBHDJACbC00B75E",
            "client_id": "P66EXX1PBY9AJXJD1NZG9FXJ0KJRGAZH@AMER.OAUTHAP",
        },
        emitDataBySubAndTickerRaw: true,
        emitDataBySubAndTickerTyped: true,
        emitDataBySubRaw: true,
        emitDataBySubTyped: true,
        emitDataRaw: true
    };

    const stream = new StreamData(streamConfig);
    stream.on('generic', (args: any) => console.log('generic', JSON.stringify(args, null, 2)));
    stream.on('heartbeat', (args: IStreamNotify[]) => console.log('heartbeat', JSON.stringify(args, null, 2)));
    stream.on('response', (args: any) => console.log('response', JSON.stringify(args, null, 2)));
    stream.on('data', (args: any) => console.log('data', JSON.stringify(args, null, 2)));
    stream.on('snapshot', (args: any) => console.log('snapshot', JSON.stringify(args, null, 2)));

    // stream.once('response', (args: IStreamNotify[]) => {
    //     stream.on('LEVELONE_FUTURES_RAW', (args: any) => console.log('l1fut raw', JSON.stringify(args, null, 2)));
    //     stream.on('LEVELONE_FUTURES_RAW__ES', (args: any) => console.log('l1fut raw es', JSON.stringify(args, null, 2)));
    //     stream.on('LEVELONE_FUTURES_TYPED', (args: any) => console.log('l1fut typed', JSON.stringify(args, null, 2)));
    //     stream.on('LEVELONE_FUTURES_TYPED__ES', (args: any) => console.log('l1fut typed es', JSON.stringify(args, null, 2)));
    //     stream.levelOneFuturesSub('/ES', buildNumberArray(0, 35));
    // });

    /*
    stream.once('response', (args: IStreamNotify[]) => {
        // stream.on('LEVELONE_FUTURES_RAW', (args: any) => console.log('l1fut raw', JSON.stringify(args, null, 2)));
        // stream.on('LEVELONE_FUTURES_RAW__ES', (args: any) => console.log('l1fut raw es', JSON.stringify(args, null, 2)));
        // stream.on('LEVELONE_FUTURES_TYPED', (args: any) => console.log('l1fut typed', JSON.stringify(args, null, 2)));
        stream.on('LEVELONE_FUTURES_TYPED__ES', (args: any) => console.log('l1fut typed es', JSON.stringify(args, null, 2)));
        stream.levelOneFuturesSub('/ES', buildNumberArray(0, 35));
        setTimeout(() => {
            stream.on('LEVELONE_FUTURES_TYPED__NQ', (args: any) => console.log('l1fut typed nq', JSON.stringify(args, null, 2)));
            stream.levelOneFuturesAdd('/NQ');
            }, 10000);
        setTimeout(() => {
            // stream.levelOneFuturesUnsub('/ES');
            stream.levelOneFuturesUnsubAll();
        }, 20000);
    });
     */

    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = './EW2H21C3950';
    //     // const symbol = '/ES';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.on('LEVELONE_FUTURES_OPTIONS_RAW', (args: any) => console.log('l1futopt raw', JSON.stringify(args, null, 2)));
    //     stream.on(`LEVELONE_FUTURES_OPTIONS_RAW_${normalizedSymbol}`, (args: any) => console.log('l1futopt raw es', JSON.stringify(args, null, 2)));
    //     stream.on('LEVELONE_FUTURES_OPTIONS_TYPED', (args: any) => console.log('l1futopt typed', JSON.stringify(args, null, 2)));
    //     stream.on(`LEVELONE_FUTURES_OPTIONS_TYPED_${normalizedSymbol}`, (args: any) => console.log('l1futopt typed es', JSON.stringify(args, null, 2)));
    //     stream.levelOneFuturesOptionsSub(symbol, buildNumberArray(0, 35));
    // });

    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = 'EUR/USD';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.on('LEVELONE_FOREX_RAW', (args: any) => console.log('l1forex raw', JSON.stringify(args, null, 2)));
    //     stream.on(`LEVELONE_FOREX_RAW_${normalizedSymbol}`, (args: any) => console.log('l1forex raw eur/usd', JSON.stringify(args, null, 2)));
    //     stream.on('LEVELONE_FOREX_TYPED', (args: any) => console.log('l1forex typed', JSON.stringify(args, null, 2)));
    //     stream.on(`LEVELONE_FOREX_TYPED_${normalizedSymbol}`, (args: any) => console.log('l1forex typed eur/usd', JSON.stringify(args, null, 2)));
    //     stream.levelOneForexSub(symbol, buildNumberArray(0, 29));
    // });

    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = 'TSLA';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.on('QUOTE_RAW', (args: any) => console.log('quote raw', JSON.stringify(args, null, 2)));
    //     stream.on(`QUOTE_RAW_${normalizedSymbol}`, (args: any) => console.log(`quote raw ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.on('QUOTE_TYPED', (args: any) => console.log('quote typed', JSON.stringify(args, null, 2)));
    //     stream.on(`QUOTE_TYPED_${normalizedSymbol}`, (args: any) => console.log(`quote typed ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.levelOneEquitiesSub(symbol, buildNumberArray(0, 52));
    // });

    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = 'TSLA_031221C580';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.on('OPTION_RAW', (args: any) => console.log('option raw', JSON.stringify(args, null, 2)));
    //     stream.on(`OPTION_RAW_${normalizedSymbol}`, (args: any) => console.log(`option raw ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.on('OPTION_TYPED', (args: any) => console.log('option typed', JSON.stringify(args, null, 2)));
    //     stream.on(`OPTION_TYPED_${normalizedSymbol}`, (args: any) => console.log(`option typed ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.levelOneOptionsSub(symbol, buildNumberArray(0, 41));
    // });

    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = 'TSLA';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.on('TIMESALE_EQUITY_RAW', (args: any) => console.log('timesale equity raw', JSON.stringify(args, null, 2)));
    //     stream.on(`TIMESALE_EQUITY_RAW_${normalizedSymbol}`, (args: any) => console.log(`timesale equity raw ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.on('TIMESALE_EQUITY_TYPED', (args: any) => console.log('timesale equity typed', JSON.stringify(args, null, 2)));
    //     stream.on(`TIMESALE_EQUITY_TYPED_${normalizedSymbol}`, (args: any) => console.log(`timesale equity typed ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.timesaleEquitySub(symbol);
    // });

    /* TODO: not working */
    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = 'SPY_030821C387';
    //     // const symbol = '.SPY210308C387,/SPY210308C387,.SPY_030821C387,SPY_210308C387';
    //     // const symbol = 'TSLA_031221C580';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.on('TIMESALE_OPTIONS_RAW', (args: any) => console.log('timesale options raw', JSON.stringify(args, null, 2)));
    //     stream.on(`TIMESALE_OPTIONS_RAW_${normalizedSymbol}`, (args: any) => console.log(`timesale options raw ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.on('TIMESALE_OPTIONS_TYPED', (args: any) => console.log('timesale options typed', JSON.stringify(args, null, 2)));
    //     stream.on(`TIMESALE_OPTIONS_TYPED_${normalizedSymbol}`, (args: any) => console.log(`timesale options typed ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.timesaleOptionsSub(symbol);
    // });

    /* TODO: bad command formatting? */
    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = 'EUR/USD';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.on('TIMESALE_FOREX_RAW', (args: any) => console.log('timesale forex raw', JSON.stringify(args, null, 2)));
    //     stream.on(`TIMESALE_FOREX_RAW_${normalizedSymbol}`, (args: any) => console.log(`timesale forex raw ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.on('TIMESALE_FOREX_TYPED', (args: any) => console.log('timesale forex typed', JSON.stringify(args, null, 2)));
    //     stream.on(`TIMESALE_FOREX_TYPED_${normalizedSymbol}`, (args: any) => console.log(`timesale forex typed ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.timesaleForexSub(symbol);
    // });

    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = '/ES';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.on('TIMESALE_FUTURES_RAW', (args: any) => console.log('timesale futures raw', JSON.stringify(args, null, 2)));
    //     stream.on(`TIMESALE_FUTURES_RAW_${normalizedSymbol}`, (args: any) => console.log(`timesale futures raw ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.on('TIMESALE_FUTURES_TYPED', (args: any) => console.log('timesale futures typed', JSON.stringify(args, null, 2)));
    //     stream.on(`TIMESALE_FUTURES_TYPED_${normalizedSymbol}`, (args: any) => console.log(`timesale futures typed ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.timesaleFuturesSub(symbol);
    // });

    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = 'TSLA';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.on('CHART_EQUITY_RAW', (args: any) => console.log('chart equity raw', JSON.stringify(args, null, 2)));
    //     stream.on(`CHART_EQUITY_RAW_${normalizedSymbol}`, (args: any) => console.log(`chart equity raw ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.on('CHART_EQUITY_TYPED', (args: any) => console.log('chart equity typed', JSON.stringify(args, null, 2)));
    //     stream.on(`CHART_EQUITY_TYPED_${normalizedSymbol}`, (args: any) => console.log(`chart equity typed ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.chartEquitySub(symbol, buildNumberArray(0,8));
    // });

    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = '/ES';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.on('CHART_FUTURES_RAW', (args: any) => console.log('chart futures raw', JSON.stringify(args, null, 2)));
    //     stream.on(`CHART_FUTURES_RAW_${normalizedSymbol}`, (args: any) => console.log(`chart futures raw ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.on('CHART_FUTURES_TYPED', (args: any) => console.log('chart futures typed', JSON.stringify(args, null, 2)));
    //     stream.on(`CHART_FUTURES_TYPED_${normalizedSymbol}`, (args: any) => console.log(`chart futures typed ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.chartFuturesSub(symbol, buildNumberArray(0,8));
    // });

    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = 'GOOG';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.on('NEWS_HEADLINE_RAW', (args: any) => console.log('news headline raw', JSON.stringify(args, null, 2)));
    //     stream.on(`NEWS_HEADLINE_RAW_${normalizedSymbol}`, (args: any) => console.log(`news headline raw ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.on('NEWS_HEADLINE_TYPED', (args: any) => console.log('news headline typed', JSON.stringify(args, null, 2)));
    //     stream.on(`NEWS_HEADLINE_TYPED_${normalizedSymbol}`, (args: any) => console.log(`news headline typed ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.newsHeadlineSub(symbol, buildNumberArray(0, 10));
    // });

    /** TODO: didn't work */
    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = 'GOOG';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.on('NEWS_STORY_RAW', (args: any) => console.log('news story raw', JSON.stringify(args, null, 2)));
    //     stream.on(`NEWS_STORY_RAW_${normalizedSymbol}`, (args: any) => console.log(`news story raw ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.on('NEWS_STORY_TYPED', (args: any) => console.log('news story typed', JSON.stringify(args, null, 2)));
    //     stream.on(`NEWS_STORY_TYPED_${normalizedSymbol}`, (args: any) => console.log(`news story typed ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.newsStorySub(symbol, buildNumberArray(0, 4));
    // });

    /** TODO: bad command formatting */
    stream.once('response', (args: IStreamNotify[]) => {
        stream.newsHeadlineListGet('GOOG');
    });

    // stream.once('response', (args: IStreamNotify[]) => {
    //     stream.qosRequest(QOS_LEVELS.L1_REALTIME_750MS);
    // });

    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = '/ES';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.chartHistoryFuturesGet(symbol, CHART_HISTORY_FUTURES_FREQUENCY.DAY_ONE, 'w2', null, null);
    //     stream.on('CHART_HISTORY_FUTURES_RAW', (args: any) => console.log('chart history futures raw', JSON.stringify(args, null, 2)));
    //     stream.on(`CHART_HISTORY_FUTURES_RAW_${normalizedSymbol}`, (args: any) => console.log(`chart history futures raw ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.on('CHART_HISTORY_FUTURES_TYPED', (args: any) => console.log('chart history futures typed', JSON.stringify(args, null, 2)));
    //     stream.on(`CHART_HISTORY_FUTURES_TYPED_${normalizedSymbol}`, (args: any) => console.log(`chart history futures typed ${symbol}`, JSON.stringify(args, null, 2)));
    // });

    // stream.once('response', (args: IStreamNotify[]) => {
    //     const symbol = '270747531,455673884';
    //     const normalizedSymbol = StreamData.normalizeSymbol(symbol);
    //     stream.accountUpdatesSub(symbol);
    //     stream.on('ACCT_ACTIVITY_RAW', (args: any) => console.log('acct activity raw', JSON.stringify(args, null, 2)));
    //     stream.on(`ACCT_ACTIVITY_RAW_${normalizedSymbol}`, (args: any) => console.log(`acct activity raw ${symbol}`, JSON.stringify(args, null, 2)));
    //     stream.on('ACCT_ACTIVITY_TYPED', (args: any) => console.log('acct activity typed', JSON.stringify(args, null, 2)));
    //     stream.on(`ACCT_ACTIVITY_TYPED_${normalizedSymbol}`, (args: any) => console.log(`acct activity typed ${symbol}`, JSON.stringify(args, null, 2)));
    // });

    await stream.doDataStreamLogin();

}

function buildNumberArray(start: number, finish: number) : string {
    const arr = [];
    for (let i = start; i <= finish; i++) {
        arr.push(i);
    }
    return arr.join(',');
}

setInterval(() => {}, 1 << 30);
doShit();