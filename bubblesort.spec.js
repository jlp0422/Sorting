describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it('handles an array with 2 items', function(){
    expect( bubbleSort([4, 2]) ).toEqual( [2, 4] );
  });
});

describe('Bubble Sort', function(){
  it('handles an array with 6 items', function(){
    expect( bubbleSort([4, 2, 5, 1, 9, 7]) ).toEqual( [1, 2, 4, 5, 7, 9] );
  });
});
