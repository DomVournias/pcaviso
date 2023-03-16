export default async function getDynamicData(query: string) {
  try {
    const data = await fetch("https://pcaviso.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
      cache: "no-store",
    });

    const res = await data.json();

    return res;
  } catch (error) {
    console.error(error);
  }
}
