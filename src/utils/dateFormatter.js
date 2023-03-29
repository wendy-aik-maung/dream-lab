export const dateFormatter = (date = new Date()) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const dateformatter = new Intl.DateTimeFormat("en-US", options);
  const parts = dateformatter.formatToParts(date);

  const year = parts.find((part) => part.type === "year").value;
  const month = parts.find((part) => part.type === "month").value;
  const day = parts.find((part) => part.type === "day").value;

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
