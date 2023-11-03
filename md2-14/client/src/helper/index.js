export const convertNumberToMoney = (x) => {
  return x.toLocaleString("vi", { style: "currency", currency: "VND" });
};
