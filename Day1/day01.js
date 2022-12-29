// Load content
const getAoCInput = async() => {
    const response = await fetch("https://adventofcode.com/2022/day/1/input"); 
    const data = await response.text();
    return data;
}; 

// Get content
const puzzleData = await getAoCInput();   

// General reducer
const addReducer = (sum, cal) => sum + cal

// -- PART ONE--
const getSumOfCal = (group) =>
    group
    .split("\n")
    .map(Number) 
    .reduce(addReducer, 0);

// Get each elfs calories by groups
const caloriesByElf = puzzleData.split("\n\n");

// Find the sum of each group
const eachElfsCalories = caloriesByElf.map(getSumOfCal);

// Get the highest sum, print it
const maxCalSum = Math.max(...eachElfsCalories);
console.log("-- Part One --");
console.log(maxCalSum);

// -- PART TWO --
// Get three highest
// Copy the sum of calories by elf, sort them in desc order
const sortedElfsCalories = [...eachElfsCalories].sort((val1, val2) => val2 - val1); 

// Take top 3 and add them
const top3 = sortedElfsCalories.slice(0, 3);
const top3Sum = top3.reduce(addReducer, 0); 

// Input result
console.log(" -- Part Two --")
console.log(top3Sum);