let studentName = "Jane Wanjiku";
let registrationNumber = "COM/001/2025";
let academicProgramme = "Computer Science";

console.log("Student Name: " + studentName);
console.log("Registration Number: " + registrationNumber);
console.log("Academic Programme: " + academicProgramme);

function calculateGrade(score) {

    if (score >= 70 && score <= 100) {
        return "A";
    }
    else if (score >= 60 && score <= 69) {
        return "B";
    }
    else if (score >= 50 && score <= 59) {
        return "C";
    }
    else if (score >= 40 && score <= 49) {
        return "D";
    }
    else if (score >= 0 && score < 40) {
        return "E";
    }
    else {
        return "Invalid Score";
    }
}

document.getElementById("gradeButton")
.addEventListener("click", function() {

    let grade = calculateGrade(75);

    alert("Your grade is: " + grade);

});

let regQUESTIONistrationForm =
document.getElementById("studentRegistrationForm");

registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name =
    document.getElementById("fullName").value.trim();

    let regNumber =
    document.getElementById("registrationNumber").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let programme =
    document.getElementById("programme").value;

    let gender =
    document.querySelector('input[name="gender"]:checked');


    if (name === "" || regNumber === "") {

        alert("Please fill in your full name and registration number.");

        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }

    if (programme === "" || gender === null) {

        alert("Please select your programme and gender.");

        return;
    }

    let message =
    "Student Name: " + name +
    "\nRegistration Number: " + regNumber;

    let formMessage =
    document.getElementById("formMessage");

    formMessage.textContent =
    "Registration successful! " + message;

    formMessage.style.color = "green";
    console.log("Student Name: " + name);
    console.log("Registration Number: " + regNumber);
    console.log("Email: " + email);
    console.log("Programme: " + programme);
    console.log("Gender: " + gender.value);

});

console.log("Testing Grade Function:");

console.log("Score 75: " + calculateGrade(75));
console.log("Score 65: " + calculateGrade(65));
console.log("Score 55: " + calculateGrade(55));
console.log("Score 45: " + calculateGrade(45));
console.log("Score 35: " + calculateGrade(35));