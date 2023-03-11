let btn = document.querySelector(".switch");
let slide = document.querySelector(".switch-slide");
let studentTxt = document.querySelector(".student-form");
let teacherTxt = document.querySelector(".teacher-form");
let sectionTxt = document.querySelector(".section-text");
let state = false;

sectionTxt.innerHTML = "Student";
btn.addEventListener("click", () => {
  if (!state) {
    slide.style = "margin-left: 72px";
    studentTxt.style = "color: white";
    teacherTxt.style = "color: rgb(15, 101, 201)";
    sectionTxt.innerHTML = "Teacher";
    state = true;
  } else if (state) {
    slide.style = "margin-left: 0px";
    studentTxt.style = "color: rgb(15, 101, 201)";
    teacherTxt.style = "color: white";
    sectionTxt.innerHTML = "Student";
    state = false;
  }
});
/*I am still to define a function that will change the value of the 'action=""' attribute in the form based on the value of the switch so that once submitted, data from the form is sent to the right database. But this is what I would come up with so far...*/
