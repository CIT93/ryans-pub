const myHeading = document.querySelector("h1");
myHeading.textContent = "Carbon Footprint Total";
// 1. Count members of household.
const myFamily = 10
// 2. Size of home.
const myHomesize = 10
// 3. Food choices.
const myFood = 8
// 4. Water consumption.
const myWater = 3
// 5. Household purchases per year.
const myPurchases = 2
// 6. Waste produced.
const myGarbage = 20
// 7. Waste recycled.
const myRecycle = 12
// 8. Transportation score.
const myCommute = 4
// 9. Total Points.
const cfpTotal = document.querySelector("h2")
// 10. Write JS to update the rendered html.
cfpTotal.textContent = myFamily + myHomesize + myFood + myWater + myPurchases + myGarbage - myRecycle + myCommute