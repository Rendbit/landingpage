const getXlmConversionRates = async (inputAmount: number, symbol: string) => {
  try {
    const headers = {
      "X-CMC_PRO_API_KEY": import.meta.env.VITE_CMC_API_KEY,
    };

    // Get XLM rates in USD and NGN
    const xlmUrl = import.meta.env.VITE_CMC_API_URL;
    const xlmResponse = await fetch(xlmUrl, { headers });

    console.log({ xlmResponse });

    const xlmData = await xlmResponse.json();
    console.log({ xlmData });

    if (!xlmData.data || !xlmData.data.XLM) {
      throw new Error("Failed to fetch XLM rates");
    }

    // Get USD to NGN rate
    const currencyUrl = import.meta.env.VITE_EXCHANGE_RATE_URL;
    const currencyResponse = await fetch(currencyUrl);
    const currencyData = await currencyResponse.json();
    const usdToNgnRate = currencyData.rates.NGN;

    // Extract rates from CoinMarketCap response
    const xlmToUsd = xlmData.data.XLM.quote.USD.price;
    const xlmToNgn = xlmData.data.XLM.quote.NGN.price;

    // Calculate inverse rates
    const usdToXlm = inputAmount / xlmToUsd;
    const ngnToXlm = inputAmount / xlmToNgn;

    console.log({
      xlmToUsd,
      xlmToNgn,
      usdToXlm,
      ngnToXlm,
      usdToNgnRate,
    });

    return symbol === "NGN" ? ngnToXlm : usdToXlm;
  } catch (error) {
    console.error("Error fetching conversion rates:", error);
    throw error;
  }
};

export { getXlmConversionRates };
