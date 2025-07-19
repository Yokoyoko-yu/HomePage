function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!height || !weight) {
    result.textContent = "Please enter both height and weight.";
    return;
  }

  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(2);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  result.textContent = `Your BMI is ${bmi} (${category}).`;
}
