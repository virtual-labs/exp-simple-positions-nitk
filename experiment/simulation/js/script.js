let data = [
  {
    step: 1,
    title: "Draw the axis and name VP & HP",
    questions: [
      {
        question: "The type of projection discussed here is related to",
        options: ["Planes", "Points", "Lines", "Solid"],
        answer: 2,
        buttonClass: "btnAxis",
        circle: null,
        circleText: null,
        func: null,
      },
      {
        question:
          "A line thickness of ____ indicates geometry out-lines in a grid sheet.",
        options: ["0.5 mm", "1 mm", "1.5 mm", "2 mm"],
        answer: 3,
        buttonClass: "btnVPHP",
        circle: null,
        circleText: null,
        func: null,
      },
    ],
  },
  {
    step: 2,
    title: "Draw the line",
    questions: [
      {
        question: "Which of the following is a line.",
        options: [
          "A one dimensinal object",
          "A two-dimensional object",
          "A three-dimensional object",
          "none of the options",
        ],
        answer: 0,
        buttonClass: "btnLine",
        circle: null,
        circleText: null,
        func: null,
      },
    ],
  },
  {
    step: 3,
    title: "Extend a",
    questions: [
      {
        question:
          "If a line is parallel to both the horizontal plane and vertical plane then that line is ____________",
        options: [
          "parallel to profile plane",
          "lies on profile plane",
          "perpendicular to profile plane",
          "inclined to profile plane",
        ],
        answer: 2,
        buttonClass: "btnaDash",
        circle: { x: 280, y: 200 },
        circleText: "a'",
        func: a,
      },
    ],
  },
  {
    step: 4,
    title: "Draw the lines with true length and angles given",
    questions: [
      {
        question:
          "If the line AB is inclined to H.P., then its plan will______.",
        options: [
          "be perpendicular to XY line",
          "be parallel to XY line",
          "show the true length",
          "None of the option",
        ],
        answer: 1,
        buttonClass: "btnbOneDash",
        circle: { x: 418, y: 70 },
        circleText: "b1'",
        func: b11,
      },
    ],
  },
  {
    step: 5,
    title: "Join b1' to locus of a'",
    questions: [
      {
        question:
          "If a line PQ lies on a horizontal plane and the vertical plane then which of the following view gives a point?",
        options: ["Side view", "Top view", "Front view", "Isometric view"],
        answer: 0,
        buttonClass: "btnThetaOne",
        circle: { x: 428, y: 280 },
        circleText: "⨀",
        func: b1,
      },
    ],
  },
  {
    step: 6,
    title: "Taking ab1 as radius draw arc to locus of b",
    questions: [
      {
        question:
          "If a line is parallel to V.P., then its top view will be ________ to XY line.",
        options: [
          "perpendicular",
          "parallel",
          "inclined",
          "None of the options",
        ],
        answer: 1,
        buttonClass: "btnB",
        circle: { x: 375, y: 398 },
        circleText: "b",
        func: bb,
      },
    ],
  },
  {
    step: 7,
    title: "Join a and b to get top view",
    questions: [
      {
        question:
          "If a line CD is parallel to H.P., then its front will be ________ to XY line.",
        options: [
          "perpendicular",
          "parallel",
          "inclined",
          "None of the options",
        ],
        answer: 1,
        buttonClass: "btnBOne",
        circle: { x: 415, y: 398 },
        circleText: "b1",
        func: b2,
      },
    ],
  },
  {
    step: 8,
    title: "Similary join b2 to locus of a",
    questions: [
      {
        question:
          "If the front view of the line AB is parallel to the XY line, then its true length is shown in",
        options: [
          "Front View",
          "Top View",
          "Side View",
          "Both Front View and Top View",
        ],
        answer: 3,
        buttonClass: "btnThetaTwo",
        circle: { x: 470, y: 180 },
        circleText: "⨀",
        func: b22,
      },
    ],
  },
  {
    step: 9,
    title: "Taking a'b2'as radius draw arc to locus of b'",
    questions: [
      {
        question:
          "If the true inclinations  and the apparent of a line with respect to HP are equal, the line is",
        options: [
          "Parallel to the horizontal plane(HP)",
          "Parallel to the vertical plane(VP)",
          "Parallel to profile plane(PP)",
          "Inclined to both reference planes",
        ],
        answer: 0,
        buttonClass: "btnBDash",
        circle: { x: 375, y: 70 },
        circleText: "b'",
        func: bbb,
      },
    ],
  },
];
const quizDiv = document.querySelector(".quiz-div");
const questionDiv = document.querySelector(".question");
const answersDiv = document.querySelector(".answers");
const questionBtnDiv = document.querySelector(".question-btn");
const practiceDiv = document.querySelector(".practice");
const canvas = document.querySelector("#simscreen");
const ctx = canvas.getContext("2d");
let currentStepCount = 1;
let currentStep;
let currentQuestions;
let currentQuestionIndex = 0;

// stepNo & Step TITLE
const stepNumber = document.querySelector(".practice-step-no");
const stepTitle = document.querySelector(".practice-step-info");
const taskTitle = document.querySelector(".task-title");

// buttons
const btnAxis = document.querySelector(".btn-axis");
btnAxis.addEventListener("click", drawAxis);
const btnVPHP = document.querySelector(".btn-vp-hp");
btnVPHP.addEventListener("click", nameVPHP);
const btnLine = document.querySelector(".btn-line");
btnLine.addEventListener("click", drawInitialLine);
const btnaDash = document.querySelector(".btn-a-dash");
btnaDash.addEventListener("click", a);
const btna = document.querySelector(".btn-a");
btna.addEventListener("click", b);
const btnbOneDash = document.querySelector(".btn-b-one-dash");
btnbOneDash.addEventListener("click", b11);
const btnThetaOne = document.querySelector(".btn-theta-one");
btnThetaOne.addEventListener("click", b1);
const btnB = document.querySelector(".btn-b");
btnB.addEventListener("click", bb);
const btnBOne = document.querySelector(".btn-b-one");
btnBOne.addEventListener("click", b2);
const btnThetaTwo = document.querySelector(".btn-theta-two");
btnThetaTwo.addEventListener("click", b22);
const btnBDash = document.querySelector(".btn-b-dash");
btnBDash.addEventListener("click", bbb);

const btnNext = document.querySelector(".btn-next");
btnNext.addEventListener("click", nextStep);
const btnReset = document.querySelector(".btn-reset");
btnReset.addEventListener("click", resetAll);
const btnTop = document.querySelector(".btn-top");
btnTop.addEventListener("click", movetoTop);
const validateAnswer = document.createElement("span");
validateAnswer.classList.add("validate");

function displayDiv(ele) {
  const taskScreen = document.querySelectorAll(".task-screen");
  taskScreen.forEach((task) => {
    task.classList.add("hide");
  });
  if (ele.classList.contains("tool-objective")) {
    document.querySelector(".objective").classList.remove("hide");
    taskTitle.textContent = "Objective";
  }
  if (ele.classList.contains("tool-apparatus")) {
    document.querySelector(".apparatus").classList.remove("hide");
    taskTitle.textContent = "Apparatus";
  }
  if (ele.classList.contains("tool-practice")) {
    taskTitle.textContent = "Solution";
    document.querySelector(".practice").classList.remove("hide");
    if (currentStep === undefined) initialSetup();
  }
}

function nextStep() {
  currentStep = data.find((step) => currentStepCount === step.step);
  stepNumber.textContent = currentStepCount;
  stepTitle.textContent = currentStep.title;
  btnNext.setAttribute("disabled", true);
  btnNext.classList.remove("blink");
  initialSetup();
}

function nextQuestion() {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex += 1;
    displayQuestionDiv(currentQuestions[currentQuestionIndex]);
  } else {
    quizDiv.classList.add("hide");
    if (currentStepCount === data.length) {
      stepNumber.classList.add("hide");
      stepTitle.classList.add("hide");
      document.querySelector(".final-statement").classList.remove("hide");
      btnNext.classList.add("hide");
      btnNext.classList.remove("blink");
    } else {
      currentStepCount += 1;
      btnNext.removeAttribute("disabled");
      btnNext.classList.add("blink");
    }
  }
}
function drawAxis() {
  canvas.classList.remove("hide");
  canvas.scrollIntoView();
  btnTop.classList.remove("hide");
  ctx.strokeStyle = "#B9B6B1";
  animate(50, 250, 650, 250, 0, nameAxis);
}

function nameAxis() {
  ctx.font = "bold 20px Nunito sans MS";
  ctx.fillText("X", 30, 255);
  ctx.fillText("Y", 670, 255);
  btnAxis.classList.add("hide");
  nextQuestion();
}

function nameVPHP() {
  ctx.fillText("VP", 69, 243);
  ctx.fillText("HP", 69, 270);
  btnVPHP.classList.add("hide");
  nextQuestion();
}

function drawLine(x1, y1, x2, y2, ratio) {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.moveTo(x1, y1);
  x2 = x1 + ratio * (x2 - x1);
  y2 = y1 + ratio * (y2 - y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function animate(x1, y1, x2, y2, ratio, cb) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio, cb);
  if (ratio > 1) {
    cb();
  } else if (ratio < 1) {
    animationStatus = true;
    requestAnimationFrame(function () {
      animate(x1, y1, x2, y2, ratio + 0.02, cb);
    });
  }
}
// function animate(x1, y1, x2, y2, ratio) {
//   ratio = ratio || 0;
//   drawLine(x1, y1, x2, y2, ratio);
//   if (ratio < 1) {
//     requestAnimationFrame(function () {
//       animate(x1, y1, x2, y2, ratio + 0.02);
//     });
//   }
// }

function animateRecursively(x1, y1, x2, y2, ratio) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio);
  if (ratio < 1) {
    animationStatus = true;
    requestAnimationFrame(function () {
      animateRecursively(x1, y1, x2, y2, ratio + 0.02);
    });
  }
}

function initialSetup() {
  currentStep = data.find((d) => d.step == currentStepCount);
  stepNumber.textContent = currentStepCount;
  stepTitle.textContent = currentStep.title;
  currentQuestions = currentStep.questions;
  currentQuestionIndex = 0;
  quizDiv.classList.remove("hide");
  displayQuestionDiv(currentQuestions[currentQuestionIndex]);
}

function displayQuestionDiv(questions) {
  console.log(currentStep, currentQuestions[currentQuestionIndex]);
  const { question, options, answer, buttonClass, circle, circleText } =
    questions;
  questionDiv.innerHTML = `${currentQuestionIndex + 1}. ${question}`;
  answersDiv.innerHTML = "";
  options.map((option, index) => {
    answersDiv.innerHTML += `
    <div class="input-group">
    <input type="radio" name="${question}" id="ans${index}" class="option" onchange='checkAnswer(this, ${index}, ${answer}, ${buttonClass},${JSON.stringify(
      circle
    )})'>
    <label for="rad1">${option}</label>
    </div>
    `;
  });
  console.log(JSON.stringify(circle));
}

function checkAnswer(ele, index, answer, buttonClass, circle) {
  const optionSelected = ele.parentNode;
  optionSelected.classList.remove("wrong");
  optionSelected.classList.remove("correct");
  if (index === answer) {
    optionSelected.classList.add("correct");
    validateAnswer.innerHTML = "Right answer👍";
    answersDiv.appendChild(validateAnswer);
    if (buttonClass != null) {
      buttonClass.classList.add("anim");
      buttonClass.classList.remove("hide");
    }
    if (circle) {
      cirX = circle.x;
      cirY = circle.y;
      cirText = currentQuestions[currentQuestionIndex].circleText;
      currentFunction = currentQuestions[currentQuestionIndex].func;
      createCircle();
    }
  } else {
    clearCircle();
    optionSelected.classList.add("wrong");
    if (buttonClass != null) {
      buttonClass.classList.remove("anim");
      buttonClass.classList.add("hide");
    }
    validateAnswer.innerHTML = "Wrong answer, please check the options again👎";
    answersDiv.appendChild(validateAnswer);
  }
}
function resetAll() {
  ctx.clearRect(0, 0, 750, 500);
  ctx.setLineDash([]);
  currentStepCount = 1;
  currentStep;
  currentQuestions;
  currentQuestionIndex = 0;
  currentFunction = null;
  circle1 = new Path2D();
  cirX = 0;
  cirY = 0;
  cirText = "";
  initialSetup();
  document.querySelectorAll(".btn").forEach((b) => b.classList.add("hide"));
  btnNext.setAttribute("disabled", true);
  btnNext.classList.remove("hide");
  btnReset.classList.remove("hide");
  stepNumber.classList.remove("hide");
  stepTitle.classList.remove("hide");
  document.querySelector(".final-statement").classList.add("hide");
  canvas.classList.add("hide");
}

function movetoTop() {
  practiceDiv.scrollIntoView();
}

let circle1 = new Path2D(),
  currentFunction;
let cirX = 0,
  cirY = 0,
  cirText = "";
function drawInitialLine() {
  ctx.lineWidth = "2";
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.lineWidth = "1.5";
  ctx.moveTo(300, 250);
  ctx.lineTo(300, 300);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = "1.5";
  ctx.moveTo(300, 250);
  ctx.lineTo(300, 200);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.moveTo(300, 300);
  ctx.setLineDash([10, 5]);
  ctx.lineTo(500, 300);
  ctx.stroke();
  ctx.moveTo(300, 200);
  ctx.lineTo(500, 200);
  ctx.stroke();

  ctx.fillText("a'", 280 - 5, 200 + 5);
  ctx.fillText("a", 280 - 5, 295 + 5);
  ctx.closePath();
  btnLine.classList.add("hide");
  nextQuestion();
}

function a() {
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(300, 200);
  ctx.lineTo(406, 94);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(300, 200, 40, -Math.PI / 4, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.setLineDash([10, 3]);
  ctx.moveTo(230, 94);
  ctx.lineTo(486, 94);
  ctx.stroke();
  ctx.fillStyle = "#000";
  ctx.fillText("b1'", 406, 70);
  ctx.fillText("θ", 337, 185);
  ctx.fillText("Locus of a", 500, 190);
  ctx.fillText("Locus of b'", 500, 93);
  clearCircle();
  ctx.closePath();
  btnaDash.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function b() {
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(300, 300);
  ctx.lineTo(430, 375);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(300, 300, 40, 0, Math.PI / 6);
  ctx.stroke();
  ctx.beginPath();
  ctx.setLineDash([10, 3]);
  ctx.moveTo(230, 375);
  ctx.lineTo(486, 375);
  ctx.stroke();
  clearCircle();
  ctx.fillText("ϕ", 340, 320);
  ctx.fillText("b1", 410, 400);
  ctx.fillText("Locus of a'", 500, 295);
  ctx.fillText("Locus of b", 500, 370);
  ctx.closePath();
  btna.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function b11() {
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(406, 94);
  ctx.lineTo(406, 300);
  ctx.stroke();
  clearCircle();
  ctx.closePath();
  btnbOneDash.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function b1() {
  ctx.beginPath();
  ctx.arc(300, 300, 106, 0, Math.PI / 4);
  ctx.stroke();
  clearCircle();
  ctx.fillText("b", 370, 400);
  ctx.closePath();
  btnThetaOne.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function bb() {
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.strokeWidth = "2";
  ctx.moveTo(300, 300);
  ctx.lineTo(375, 375);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.arc(300, 300, 55, 0, Math.PI / 4);
  ctx.stroke();
  clearCircle();
  ctx.fillText("β", 360, 328);
  ctx.closePath();
  btnB.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}
function b2() {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.setLineDash([]);
  ctx.moveTo(430, 375);
  ctx.lineTo(430, 200);
  ctx.stroke();
  clearCircle();
  ctx.closePath();
  btnBOne.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function b22() {
  ctx.beginPath();
  ctx.arc(300, 200, 130, -Math.PI / 3.27, 0);
  ctx.stroke();
  clearCircle();
  ctx.fillText("b'", 370, 80);
  ctx.closePath();
  btnThetaTwo.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}
function bbb() {
  ctx.beginPath();
  ctx.strokeStyle = "#FF0000";
  ctx.moveTo(300, 200);
  ctx.lineTo(375, 94);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.arc(300, 200, 55, -Math.PI / 3.19, 0);
  ctx.stroke();
  clearCircle();
  ctx.fillText("α", 350, 170);
  ctx.closePath();
  btnBDash.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function createCircle() {
  console.log(cirText);
  ctx.beginPath();
  if (cirText == "b1'") {
    circle1.arc(cirX, cirY, 20, 0, 2 * Math.PI);
  } else circle1.arc(cirX, cirY, 16, 0, 2 * Math.PI);
  ctx.fillStyle = "#417472";
  ctx.fill(circle1);
  ctx.fillStyle = "#fff";
  if (cirText == "b1'") {
    ctx.fillText(cirText, cirX - 9, cirY + 5);
  } else ctx.fillText(cirText, cirX - 7, cirY + 5);
  ctx.closePath();
}

function clearCircle() {
  if (cirText == "b1'") {
    ctx.clearRect(cirX - 20, cirY - 20, 40, 40);
  } else ctx.clearRect(cirX - 20, cirY - 20, 37, 37);
  ctx.fillStyle = "#000";
  if (cirText == "b1'") {
    ctx.fillText(cirText, cirX - 9, cirY + 5);
  } else if (cirText != "⨀") {
    ctx.fillText(cirText, cirX - 7, cirY + 5);
  }
}

/*

//  Listen for mouse moves
canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();
  console.log(
    "hii",
    event.clientX - rect.left,
    event.clientY - rect.top,
    event.screenX,
    event.screenY
  );
  // Check whether point is inside circle
  if (ctx.isPointInPath(circle1, event.clientX, event.clientY)) {
    if (cirText == "b1'") {
      ctx.clearRect(cirX - 20, cirY - 20, 40, 40);
    } else ctx.clearRect(cirX - 20, cirY - 20, 37, 37);
    ctx.fillStyle = "#000";
    if (cirText == "b1'") {
      ctx.fillText(cirText, cirX - 9, cirY + 5);
    } else if (cirText != "⨀") {
      ctx.fillText(cirText, cirX - 7, cirY + 5);
    }
    circle1 = new Path2D();
    currentFunction();
    nextQuestion();
  }
});

*/
