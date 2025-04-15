const getXlmConversionRates = async (inputAmount: number, symbol: string) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/waitlist-api/conversion-rates`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputAmount, symbol }),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch conversion rates");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching conversion rates:", error);
    throw error;
  }
};

export { getXlmConversionRates };
