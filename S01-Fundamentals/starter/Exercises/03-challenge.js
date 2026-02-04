// Saving the points for each player
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// Comparing the avarege show the result.
// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else if (scoreKoalas === scoreDolphins) {
//     console.log('Both win the trophy');
// }

/*
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule,
a team only wins if it has a higher score than the other team, and the same time
a score of at least 100 points. HINT: Use a logical operator to test for minimum score,
as well as multiple else-if blocks 😉

4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both 
teams have the same score and both have a score greater or equal 100 points. Otherwise, 
no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// BONUS 1
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3; 
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreKoalas === scoreDolphins && scoreKoalas >= 100) {
    console.log('Both win the trophy');
}
