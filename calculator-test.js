
it('should calculate the monthly rate correctly', function () {
  const values = {
  amount: 10000,
  years: 4,
  rate: 3
};
expect(calculateMonthlyPayment(values)).toEqual('221.34');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000,
    years: 4,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('230.29');
});

/// etc
