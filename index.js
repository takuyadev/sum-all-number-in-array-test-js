function sumItems(array) {

  // If array is more than one, keep going
  // Recursive case
  if (array.length > 1) {

    // Check if current iteration is an array
    if (Array.isArray(array[array.length - 1])) {

      // YOU HAVE TO RETURN IT TO THE ARRAY??
      array[array.length - 1] = sumItems(array[array.length - 1]);
    }

    // Pop the end of the array and add it to the first value
    array[0] += array.pop();
    return sumItems(array);
  }
  
  return array[0];
}

console.log(sumItems([1, 2, [2, 2, 2], 3]));
