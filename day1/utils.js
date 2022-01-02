const self = module.exports;

self.countGreaterValues = (arr) => {
  return arr.reduce(
    (val, curr, i, arr) => (curr > arr[i - 1] ? val + 1 : val),
    0
  );
};
