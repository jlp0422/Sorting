describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split( [2, 6, 8, 4] )).toEqual( [[2, 6], [8, 4]] )
  });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves if length is uneven', function() {
    expect( split( [2, 6, 8, 4, 3] )).toEqual( [[2, 6], [8, 4, 3]] )
  });
});
