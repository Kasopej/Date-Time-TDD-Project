"use strict";
const DateTime = (function () {
  function createDateTime(date) {
    if (!(date instanceof Date)) {
      throw new Error(`${String(date)}is not a Date object`);
    }
    return {
      get offset() {
        return date.getTime();
      },
    };
  }
  return function (date = new Date()) {
    return createDateTime(date);
  };
})();
