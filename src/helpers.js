export const restructorData = (data, len) => {
  let i = 0,
    size = 0;
  let newData = [];
  let main = [];
  while (i <= data.length) {
    if (size < len) {
      if (data[i] !== undefined) main.push(data[i]);
      size++;
      i++;
    } else {
      size = 0;
      newData.push(main);
      main = [];
    }
  }
  if (main.length !== 0) {
    newData.push(main);
  }
  return newData;
};
