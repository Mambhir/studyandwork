// for array display
const displayArray = document.getElementById("rpl-qualification-array");
const viewBar = document.getElementById("array-one");

function viewArray() {
  viewBar.style.display = "grid";
}

displayArray.addEventListener("mouseenter", viewArray);

// close array
function closeViewArray() {
  viewBar.style.display = "none";
}

displayArray.addEventListener("mouseout", closeViewArray);

// for Array two
const displayArray2 = document.getElementById("rpl-industry");
const viewBar2 = document.getElementById("array-two");

function viewArray2() {
  viewBar2.style.display = "grid";
}

displayArray2.addEventListener("mouseenter", viewArray2);

// close Array two
function closeViewArray2() {
  viewBar2.style.display = "none";
}

displayArray2.addEventListener("mouseout", closeViewArray2);

// for Array three
const displayArray3 = document.getElementById("trade");
const viewBar3 = document.getElementById("trade-array");

function viewArray3() {
  viewBar3.style.display = "grid";
}

displayArray3.addEventListener("mouseenter", viewArray3);

// close Array three
function closeViewArray3() {
  viewBar3.style.display = "none";
}

displayArray3.addEventListener("mouseout", closeViewArray3);

// for Array four
const displayArray4 = document.getElementById("courses");
const viewBar4 = document.getElementById("courses-array");

function viewArray4() {
  viewBar4.style.display = "grid";
}

displayArray4.addEventListener("mouseenter", viewArray4);

// close Array three
function closeViewArray4() {
  viewBar4.style.display = "none";
}

displayArray4.addEventListener("mouseout", closeViewArray4);

// for mobile
const open = document.getElementById("find");
const close = document.getElementById("close-mobile");
const mobileArray = document.getElementById("mobile-array");

function openMobileArray() {
  mobileArray.style.display = "flex";
}
function closeMobileArray() {
  mobileArray.style.display = "none";
}
open.addEventListener("click", openMobileArray);
close.addEventListener("click", closeMobileArray);

// formobilecontents

const qualificationArray = document.getElementById("for-mobile-qual-array");
const qualificationTrigger = document.getElementById("for-mobile-qual");
const whenQualificationArrayIsOpen = document.getElementById(
  "for-mobile-qual-open"
);
const whenQualificationArrayIsClose = document.getElementById(
  "for-mobile-qual-close"
);

qualificationTrigger.addEventListener("click", function () {
  if (qualificationArray.style.display === "block") {
    qualificationArray.style.display = "none";
    whenQualificationArrayIsOpen.style.display = "none";
    whenQualificationArrayIsClose.style.display = "block";
  } else {
    qualificationArray.style.display = "block";
    whenQualificationArrayIsOpen.style.display = "block";
    whenQualificationArrayIsClose.style.display = "none";
  }
});

// for industry

const industryArray = document.getElementById("for-mobile-indus-array");
const industryTrigger = document.getElementById("for-mobile-indus");
const whenIndustryArrayIsOpen = document.getElementById(
  "for-mobile-indus-open"
);
const whenIndustryArrayIsClose = document.getElementById(
  "for-mobile-indus-close"
);

industryTrigger.addEventListener("click", function () {
  if (industryArray.style.display === "flex") {
    industryArray.style.display = "none";
    whenIndustryArrayIsOpen.style.display = "none";
    whenIndustryArrayIsClose.style.display = "block";
  } else {
    industryArray.style.display = "flex";
    whenIndustryArrayIsOpen.style.display = "block";
    whenIndustryArrayIsClose.style.display = "none";
  }
});

// for trade

const tradeArray = document.getElementById("for-mobile-trade-array");
const tradeTrigger = document.getElementById("for-mobile-trade");
const whenTradeArrayIsOpen = document.getElementById("for-mobile-trade-open");
const whenTradeArrayIsClose = document.getElementById("for-mobile-trade-close");

tradeTrigger.addEventListener("click", function () {
  if (tradeArray.style.display === "flex") {
    tradeArray.style.display = "none";
    whenTradeArrayIsOpen.style.display = "none";
    whenTradeArrayIsClose.style.display = "block";
  } else {
    tradeArray.style.display = "flex";
    whenTradeArrayIsOpen.style.display = "block";
    whenTradeArrayIsClose.style.display = "none";
  }
});

// for courses

const coursesArray = document.getElementById("for-mobile-courses-array");
const coursesTrigger = document.getElementById("for-mobile-courses");
const whenCoursesArrayIsOpen = document.getElementById(
  "for-mobile-courses-open"
);
const whenCoursesArrayIsClose = document.getElementById(
  "for-mobile-courses-close"
);

coursesTrigger.addEventListener("click", function () {
  if (coursesArray.style.display === "flex") {
    coursesArray.style.display = "none";
    whenCoursesArrayIsOpen.style.display = "none";
    whenCoursesArrayIsClose.style.display = "block";
  } else {
    coursesArray.style.display = "flex";
    whenCoursesArrayIsOpen.style.display = "block";
    whenCoursesArrayIsClose.style.display = "none";
  }
});

// for form
// const openForm1 = document.getElementById("openform1");
const openForm2 = document.getElementById("openform2");
const openForm3 = document.getElementById("openform3");

const form = document.getElementById("main-form");
const closeform = document.getElementById("close-form");

function forOpeningForm() {
  form.style.display = "block";
}

function forClosingForm() {
  form.style.display = "none";
}

closeform.addEventListener("click", forClosingForm);
// openForm1.addEventListener("click", forOpeningForm);
openForm2.addEventListener("click", forOpeningForm);
openForm3.addEventListener("click", forOpeningForm);

// for courses links

const firstCourses = document.getElementById("first-course");

firstCourses.addEventListener("click", forCourseLinks);

// second course
const secondCourses = document.getElementById("no2course");

secondCourses.addEventListener("click", forCourseLinks);

// third course
const thirdCourse = document.getElementById("course3");
thirdCourse.addEventListener("click", forCourseLinks);

// fourth course
const fourthCourse = document.getElementById("course4");
fourthCourse.addEventListener("click", forCourseLinks);

// course5
const fiveCourse = document.getElementById("course5");
fiveCourse.addEventListener("click", forCourseLinks);

// for couse6
const sixCourse = document.getElementById("course6");
sixCourse.addEventListener("click", forCourseLinks);
// seven
const sevenCourse = document.getElementById("course7");
sevenCourse.addEventListener("click", forCourseLinks);

function forCourseLinks() {
  mobileArray.style.display = "none";
}
