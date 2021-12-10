describe("DateTime", function () {
  it("when called wih no arguments, returns a date object representing the current time", function () {
    let lowerLimit = new Date().getTime(),
      offset = DateTime().offset,
      upperLimit = new Date().getTime();
    expect(offset).not.toBeLessThan(lowerLimit);
    expect(offset).not.toBeGreaterThan(upperLimit);
  });

  //second case
  it("returns a date object represening the passed date when called with one valid date object argument", function () {
    let dates = [new Date(), new Date(0), new Date(864e13), new Date(-864e13)];
    dates.forEach((date) => {
      expect(DateTime(date).offset).toEqual(date.getTime());
    });
  });

  //third case
  it("throws an error when a non-date argument is passed", function () {
    let nonDates = [0, "i", NaN, null, {}, [], Infinity];
    nonDates.forEach((nonDate) => {
      expect(DateTime.bind(null, nonDate)).toThrow();
    });
  });

  //fourth case
  it("returns NaN if an invalid date object. This return when the invalid date object is passed to its methods", function () {
    let invalidDates = [new Date(864e13 + 1), new Date(-1e99), new Date("xyz")];
    invalidDates.forEach((invalidDate) => {
      expect(isNaN(DateTime(invalidDate).offset)).toBe(true);
    });
  });
});
