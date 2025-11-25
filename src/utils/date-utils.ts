const formatDate = (date: Date): string => {
  let dateString = "XX";
  try {
    dateString = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  } catch (err) {}
  return dateString;
};

export default formatDate;
