//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//Return the average of the given array rounded down to its nearest integer.

//function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  // Parameters: gbrades, data type: arrays int
  // Return the averages of grades
  // Example input: 30,60,90.    return 60
  // add them 30+60+90 = 180
  // divide by students in class , # of elements in the array  (find how many students in class)
  // return the number
let sum = marks.reduce((a,b) => a+b)
let numOfStudents =marks.length
let output= Math.floor(sum/numOfStudents)
return output
}
