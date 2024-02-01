export const countAverage = (array) => {
    if (array.length === 0) {
      return null;
    }
    
    const sum = array.reduce((total, num) => total + num, 0);
    const average = sum / array.length;
    
    return average;
  };
export const alphaOmega = (array) => {
    if (array.length === 0) {
      return [];
    }
    
    const firstElement = array[0];
    const lastElement = array[array.length - 1];
    
    return [firstElement, lastElement];
  };

export const fill = (number, element) => {
  const newArray = [];
  
  for (let i = 0; i < number; i++) {
    newArray.push(element);
  }
  
  return newArray;
};

export const fromPairs = (array) => {
    return array.reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
  };
export const intersection = (...arrays) => {
    return Array.from(arrays.reduce((acc, curr) => {
      return acc.filter((value) => curr.includes(value));
    }));
  };