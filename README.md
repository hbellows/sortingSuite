# Sorting Suite

Sorting algorithms are one of the common domains for studying Computer Science data structures and algorithms. They give us an opportunity to focus on algorithms of various complexity all solving a relatively simple problem.

The goals of Sorting Suite are as follows:
 - Come to recognize how to solve problems
 - Learn to wrestle with a difficult problem 
 - Practice articulating code
 - Learn to think algorithmically
 - Begin to understand optimization and efficiency
 - Learn to write (and love) unit tests

This project includes the following files:
 - mergeSort.js
 - mergeSort-test.js


For more advanced testing you will need to generate arrays of numbers to see how large of an array your different sorting algorithms can sort.

The test suites between sorts will be very similar; however, we want to see you stress-test the sorting algorithms. Some are more efficient than others and can get through larger arrays. 


## Merge Sort
Merge sort is much faster than bubble and insertion sort. It typically has two parts 1: a merge function which takes two sorted arrays and merges them into one sorted array 2: a mergeSort function which splits an unsorted array into pieces so that they can be sorted.

It can be solved elegantly with a recursive solution.

### Theory

Merge sort can be thought of as splitting an array into two arrays and sorting the halves by also splitting them in half and sorting those halves by splitting them in half… and so on.

The goal of the splitting is to get down to an array with only one item in it. Arrays with one item are sorted and can be merged with other sorted arrays to create larger sorted arrays.

For a brief example let’s look at a simple array. The first step would be to split the array into smaller arrays.

#### Split the arrays
```
original_array:  [2, 0, 1, 3]
first_split:     [2, 0]
remaining_split: [1, 3]
```
We then proceed to split one of those arrays further until we are left with just numbers to compare.

#### Split again
```
first_split: [2, 0]
first_num:   2
second_num:  0
```
We then compare those numbers and put them back into an array together. 2 and 0 will swap, creating a sorted split array.

#### Sort the doubly split array
```
sorted_first_split: [0, 2]
remaining_split:    [1, 3]
```
We do the same operation on the remaining split, but we it’s already sorted so there will be no change. We then merge these two sorted halves together to create a final sorted array. This is accomplished by comparing the each element in the first split to those in the remaining split.

#### Merge the split and sorted arrays
```
first_split_candidates:     0, 2
remaining_split_candidates: 1, 3
first_combination:          0, 1
second_combination:         0, 1, 2
third_combination:          0, 1, 2, 3
merged_array:               [0, 1, 2, 3]
```
