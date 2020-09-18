/*It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.*/


function bonusTime(salary, bonus) {
  if (bonus) {
    return "\u00A3" + String(salary*10)
    }
  else {
    return "\u00A3" + String(salary)
    }
}
