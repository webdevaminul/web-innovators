export const getMonthName = (date = new Date()) => {
    const options = { month: "long" };
    const monthName = new Intl.DateTimeFormat("en-US", options).format(date);
    return monthName ;
}