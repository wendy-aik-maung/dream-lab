export const dateFormatter = () => {
  const date = new Date();
  if (isNaN(date.getTime())) {
    throw new TypeError("Invalid ISO 8601 date string");
  }

  const year = date.getFullYear().toString().padStart(4, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const replacements = {
    yyyy: year,
    MM: month,
    dd: day,
  };

  let output = "yyyy-MM-dd";
  for (const [pattern, value] of Object.entries(replacements)) {
    output = output.replace(pattern, value);
  }

  return output;
};
