export default async function getClientData(query: string) {
  try {
    const { data } = await fetch("https://pcaviso.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
      cache: "no-store",
    }).then((res) => res.json());

    return data;
  } catch (error) {
    console.error(error);
  }
}
