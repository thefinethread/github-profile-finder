export const formatNumberWithSuffix = (num) => {
  return num < 1000 ? num.toString() : (num / 1000).toFixed(1) + 'k';
};
