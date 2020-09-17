import moment from "moment";

export const formatDate = (date: string) => {
  return moment(date).format("DD/MM/YY HH:mm");
};
