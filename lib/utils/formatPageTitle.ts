export default function formatPageTitle(title: string) {
  const formattedTitle = title.replace(/-/g, " ");
  return formattedTitle;
}
