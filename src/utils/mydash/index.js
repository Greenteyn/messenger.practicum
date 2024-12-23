module.export = {
  identity: () => {
    value;
  },

  first: (list) => {
    return Array.isArray(list) ? list[0] : undefined;
  },

  last: (list) => {
    return Array.isArray(list) ? list[list.length - 1] : undefined;
  },

  range: (start = 0, end, step = 1, isRight = false) => {
    if (!end) {
      end = start;
      start = 0;
    }

    let length = Math.ceil((Math.abs(end) - Math.abs(start)) / Math.abs(step));
    const list = new Array(length);

    if (end < 0) step = -step;

    let i = -1;
    while (length--) {
      list[++i] = start;
      start += step;
    }

    return !isRight ? list : list.reverse();
  },

  rangeRight: (start, end, step) => {
    return range(start, end, step, true);
  },

  isEmpty: (value) => {
    return typeof value === "number" || 
      typeof value === "boolean" ||
      value === null ||
      value === "" ||
      value === undefined ||
      (Object.prototype.toString.call(value) === "[object Object]" &&
        !Object.keys(value).length) ||
      (Array.isArray(value) && !value.length)
      ? true
      : false;
  },
};
