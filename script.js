document.addEventListener("DOMContentLoaded", function() {
    const myName = "Daniel Eno";
    const title = document.createElement("h1");
    title.textContent = myName;
    title.style.textAlign = "center";
    title.style.color = "#333";
    document.body.appendChild(title);
  
    const firstNumberInput = createNumberInput("num1", "Enter the first number");
    document.body.appendChild(firstNumberInput);
  
    const secondNumberInput = createNumberInput("num2", "Enter the second number");
    document.body.appendChild(secondNumberInput);
  
    const sumButton = document.createElement("button");
    sumButton.textContent = "Get the Sum!";
    sumButton.addEventListener("click", calculateSum);
    sumButton.style.display = "block";
    sumButton.style.margin = "10px auto";
    document.body.appendChild(sumButton);
  
    const resultElement = document.createElement("p");
    resultElement.id = "sumResult";
    document.body.appendChild(resultElement);
  });
  
  function createNumberInput(id, placeholder) {
    const input = document.createElement("input");
    input.type = "number";
    input.id = id;
    input.placeholder = placeholder;
    input.addEventListener("input", validateInput);
    input.style.display = "block";
    input.style.margin = "10px auto";
    return input;
  }
  
  function validateInput(event) {
    const inputField = event.target;
  
    try {
      const value = parseFloat(inputField.value);
      if (isNaN(value)) {
        throw new Error("Hey, that's not a valid number!");
      } else {
        inputField.style.border = "";
      }
    } catch (error) {
      showError(inputField, error.message);
    }
  }
  
  function showError(element, errorMessage) {
    element.style.border = "2px solid red";
    const errorParagraph = document.createElement("p");
    errorParagraph.style.color = "red";
    errorParagraph.textContent = errorMessage;
    errorParagraph.style.textAlign = "center";
    document.body.appendChild(errorParagraph);
    setTimeout(function() {
      element.style.border = "";
      errorParagraph.remove();
    }, 3000);
  }
  
  function calculateSum() {
    const firstNum = parseFloat(document.getElementById("num1").value);
    const secondNum = parseFloat(document.getElementById("num2").value);
    const resultElement = document.getElementById("sumResult");
  
    const sum = firstNum + secondNum;
    resultElement.textContent = "The Sum is: " + sum;
    resultElement.style.textAlign = "center";
  }
  