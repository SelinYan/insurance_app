const form = document.querySelector("form");
const customer = document.querySelector("#name");
const age = document.querySelectorAll(`[name="age"]`);
const healthStatus = document.querySelectorAll(`[name="status"]`);
const googHabits = document.querySelectorAll(`[name="goodHabit"]`);
const badHabits = document.querySelectorAll(`[name="badHabit"]`);

const riskscore = document.querySelector("#riskscore");

const riskscoreCal = () => {
  let customerName = customer.value;
  let ageResult = "";
  let healthStatusResult = [];
  let goodHabitResult = [];
  let badHabitResult = [];
  let score = 500;

  //calculating riskscore for age
  age.forEach((item) => {
    if (item.checked) {
      ageResult = item.id;
    }
  });

  switch (ageResult) {
    case "age1":
      score;
      break;
    case "age2":
      score *= 1.1;
      break;
    case "age3":
      score *= 1.3;
      break;
    case "age4":
      score *= 1.6;
      break;
    case "age5":
      score *= 2;
      break;
    case "age6":
      score *= 2.5;
      break;
    case "age7":
      score *= 3.1;
      break;
  }

  //calculating riskscore for health status
  healthStatus.forEach((disease) => {
    if (disease.checked) {
      healthStatusResult.push(disease.value);
    }
  });
  if (healthStatusResult.length > 0) {
    score *= 1 + healthStatusResult.length / 100;
  }

  //calculating riskscore for good habits
  googHabits.forEach((goodHabit) => {
    if (goodHabit.checked) {
      goodHabitResult.push(goodHabit.value);
    }
  });
  if (goodHabitResult.length > 0) {
    score *= 1 - (goodHabitResult.length * 5) / 100;
  }

  //calculating riskscore for bad habits
  badHabits.forEach((badHabit) => {
    if (badHabit.checked) {
      badHabitResult.push(badHabit.value);
    }
  });
  if (badHabitResult.length > 0) {
    score *= 1 + (badHabitResult.length * 5) / 100;
  }

  //let #riskscore show score
  riskscore.textContent = score;
  riskscore.textContent = score.toFixed(2);
};

form.addEventListener("input", riskscoreCal);
