/* --INFORMATION--
A X Rock +1
B Y Paper +2
C Z Sissors +3
Lost +0
Draw +3
Win +6
*/

// Load AoC input
const getAocInput = async() => {
    const response = await fetch("https://adventofcode.com/2022/day/2/input");
    const data = await response.text();
    return data.trim();
};

// Get data from AoC input
const puzzleData = await getAocInput(); 

// -- Example local data for debbugging (result should be 15) --
let refData = `A Y
B X
C Z`;

const firstMove = 'A Y';

// ---- PART 01 ----- 

// Reference Scores Tables
const movesScores = {X: 1, Y: 2, Z: 3};

const roundScores = {
    A: {X: 3, Y: 6, Z: 0},
    B: {X: 0, Y: 3, Z: 6},
    C: {X: 6, Y: 0, Z: 3}
};

// Get total score of the game
const getTotalScore = (round) => {
    // Get moves
    const moves = round.split(" ");
    const [elfMovement,  myMovement] = [moves[0], moves[1]];

    // Get myMovement score
    const myMovementScore = movesScores[myMovement];

    // Calculate round score
    const roundScore = roundScores[elfMovement][myMovement];

    // Add up scores to get totalRoundScore
    const totalRoundScore = myMovementScore + roundScore;
    return totalRoundScore;
}

// Get each Round
const rounds = puzzleData.split("\n");

// Calculate each round scores
const scores = rounds.map(getTotalScore);

// Calculate total score
const totalScore = scores.reduce((sum, num) => sum + num,  0);
console.log("---- PART ONE ----");
console.log(totalScore);

// ---- PART TWO ----
// 0pts for not winning
// 3pts for draw
// 6pts for winning
const futureScores = {X: 0, Y: 3, Z: 6};

// 3pts if rock is choosen
// 2tps if paper is choosen
// 1pts if sissors are choosen

const newRoundScores = {
    A: {X: 3, Y: 1, Z: 2},
    B: {X: 1, Y: 2, Z: 3},
    C: {X: 2, Y: 3, Z: 1}
};

const getNewScores = (round) => {
    const moves = round.split(" ");
    const [elfMove, roundsFuture] = [moves[0], moves[1]];

    // Get score of current round
    currentRoundScore = futureScores[roundsFuture];

    // Get my move score
    const myMovementScore = newRoundScores[elfMove][roundsFuture];

    // Get final score for this round
    const newRoundScore = currentRoundScore + myMovementScore;
    return newRoundScore;
}

const newScores = rounds.map(getNewScores);

const newTotalScore = newScores.reduce((sum, num) => sum + num, 0);

console.log("---- PART TWO ----");
console.log(newTotalScore);

