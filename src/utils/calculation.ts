/**
 * Function to transform date into DAY-MONTH-YEAR format
 * @param oldFormatDate date in format YEAR-MONTH-DAY
 * @returns date in new format
 */
export const convertDateFormat = (oldFormatDate: string) => {
  if (oldFormatDate) {
    const [year, month, day] = oldFormatDate.split('-');
    const newFormatDate = `${day}-${month}-${year}`;
    return newFormatDate;
  }
};
