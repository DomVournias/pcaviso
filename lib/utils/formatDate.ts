export default function formatDate(date: string) {
  let inputDate = new Date(date);

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedDate = formatter.format(inputDate);

  return formattedDate;
}
