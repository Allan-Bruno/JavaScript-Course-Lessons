const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let height = document.getElementById("height").value;

  let weight = document.getElementById("weight").value;

  let calculation = weight / (height * height);

  let BMI = calculation.toString().slice(0, 5);
  console.log(typeof BMI);

  let state;

  let result = document.getElementById("result");

  if (BMI <= 18.5) {
    state = "Under weight";
  } else if (BMI > 18.5 && BMI < 24.9) {
    state = "Common weight";
  } else if (BMI >= 24.9 && BMI < 29.9) {
    state = "Over weight";
  } else if (BMI >= 29.9 && BMI < 34.9) {
    state = "Grade 1 Obesity";
  } else if (BMI >= 34.9 && BMI < 35) {
    state = "Grade 2 Obesity";
  } else if (BMI >= 35) {
    state = "Grade 3 Obesity";
  }

  if (!height || !weight || weight == " ") {
    result.innerText = "Type your info correctily";
    result.classList.remove("hidden", "bg-sky-300");
    result.classList.add("bg-red-400");
    return;
  }
  result.innerText = `Your BMI is ${BMI} and your health state is ${state}`;
  result.classList.remove("hidden", "bg-red-400");
  result.classList.add("bg-sky-300");
});
