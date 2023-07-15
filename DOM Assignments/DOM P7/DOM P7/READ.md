
```javascript
// Solution Assignment 7 Task 1 

const languages = document.querySelectorAll(".main__languages a");
languages.forEach((element) => {
  if (element.innerText.includes("2.0")) {
    element.style.display = "none";
  }
});
```


### Task 2
> I have to use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.

```javascript
// Solution Assignment 7 Task 2

const languages = document.querySelectorAll(".main__languages a");
languages.forEach((element) => {
  if (element.innerText.includes("2.0")) {
    element.style.display = "none";
  }
});

const inputField = document.querySelector(".main__form-input");
const formButton = document.querySelector(".main__form-btn");
inputField.disabled = false;
formButton.disabled = false;
inputField.value = "iNeuron";
```