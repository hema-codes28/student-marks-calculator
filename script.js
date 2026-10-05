let students = Number(prompt("Enter number of students:"));

let passed = 0;
let failed = 0;

for (let i = 1; i <= students; i++) {

    let name = prompt("Enter student name:");

    let english = Number(prompt("Enter English marks:"));
    let maths = Number(prompt("Enter Maths marks:"));
    let science = Number(prompt("Enter Science marks:"));
    let social = Number(prompt("Enter Social marks:"));
    let computer = Number(prompt("Enter Computer marks:"));

    let total = english + maths + science + social + computer;
    let average = total / 5;
    let percentage = (total / 500) * 100;

    let result;
    let grade;

    if (
        english >= 35 &&
        maths >= 35 &&
        science >= 35 &&
        social >= 35 &&
        computer >= 35
    ) {
        result = "Pass";
        passed++;

        if (percentage >= 90) {
            grade = "A+";
        } else if (percentage >= 80) {
            grade = "A";
        } else if (percentage >= 70) {
            grade = "B";
        } else if (percentage >= 60) {
            grade = "C";
        } else if (percentage >= 50) {
            grade = "D";
        } else {
            grade = "E";
        }

    } else {
        result = "Fail";
        grade = "F";
        failed++;
    }

    console.log("Student Name:", name);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Percentage:", percentage + "%");
    console.log("Grade:", grade);
    console.log("Result:", result);
    console.log("-------------------------");
}

console.log("Total Students:", students);
console.log("Passed Students:", passed);
console.log("Failed Students:", failed);