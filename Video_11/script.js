let inputTag = document.getElementById("inputTag");

const calculate = (number) => {
  inputTag.value += number;
};

const result = () => {
  try {
    inputTag.value = eval(inputTag.value);
  } catch (error) {
    alert("Invalid Expression");
  }
};

const clr = () => {
  inputTag.value = "";
};

const clrOne = () => {
  inputTag.value = inputTag.value.slice(0, -1);
};
