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

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([2, 4, 5], [3, 6, 8])).toEqual([2, 3, 4, 5, 6, 8])
  });
});
