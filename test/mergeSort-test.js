assert = require('chai').assert
const mergeSort = require('../mergeSort')

describe("Sorting Algorithm", function() {
  context("Merge Sort", function() {
    it('should return array if only one element', function() {
      const originalArray = [4];
      assert.deepEqual(mergeSort(originalArray), [4]);
    })

    it('should sort the array', function () {
      const originalArray = [8,4,5,9,1];
      const sortedArray = [1,4,5,8,9];
      assert.deepEqual(mergeSort(originalArray), sortedArray)
    });

    it('should sort lots of numbers', function() {
      const originalArray = [8,47,99,34,6,22,7,5,4435,7,79,444,5,9,1];
      const sortedArray = [1,5,5,6,7,7,8,9,22,34,47,79,99,444,4435];
      assert.deepEqual(mergeSort(originalArray), sortedArray)
    });
  });
});