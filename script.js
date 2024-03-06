function calculateBMI() {
    
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const weightUnit = document.getElementById("weightUnit").value;
    const height = parseFloat(document.getElementById("height").value);
    const heightUnit = document.getElementById("heightUnit").value;

    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please fill in valid weight and height values.");
        return;
    }

    
    const weightInKg = (weightUnit === "lbs") ? weight / 2.20462 : weight;
    const heightInCm = (heightUnit === "feet") ? height * 30.48 : height;

    
    const bmi = weightInKg / Math.pow(heightInCm / 100, 2);

    
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Your BMI: ${bmi.toFixed(2)}</p><p>Category: ${category}</p>`;
}
