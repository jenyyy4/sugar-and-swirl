export const getBakeryItems = async () => {
    try {
      const response = await fetch("https://67f3894acbef97f40d2b0092.mockapi.io/api/v1/bakery-items");
      const data = await response.json();
  
      const categorized = {
        cupcakes: data.filter((item) => item.type === "cupcake"),
        cookies: data.filter((item) => item.type === "cookie"),
        cakes: data.filter((item) => item.type === "cake"),
        donuts: data.filter((item) => item.type === "donut"),
        macaroons: data.filter((item) => item.type === "macaroon")
      };
  
      return categorized;
    } catch (error) {
      console.error("Failed to fetch bakery items", error);
      return { cupcakes: [], cookies: [], cakes: [], donuts: [], macaroons: [] };
    }
  };