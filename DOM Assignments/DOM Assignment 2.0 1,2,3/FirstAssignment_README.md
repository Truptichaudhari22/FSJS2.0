# 1. DOM Assignment 1

### Task 1
>I have to add an element named "Hire Me" in the navigation menu.

```javascript
// Solution Task 1

const navLi = document.querySelector("nav ul");
const element = document.createElement("li");
element.innerHTML = "<a>Hire Me</a>";
navLi.appendChild(element);
```


### Task 2
>I have to change the text inside search input field from "Search" to "Search My Project".


```javascript
// Solution Task 2

const searchField = document.querySelector(".search-field input");
searchField.placeholder = "Search My Project";
```

### Task 3
>I have to change the paragraph text from "a Freelancer for National and International Client" to "an Employee for iNeuron Intelligence Pvt Ltd".

```javascript
// Solution Task 3

const textField = document.querySelectorAll(".hero-left-section p span");
textField[1].innerText = "an Employee";
textField[2].innerText = "iNeuron Intelligence Pvt Ltd";
```

### Task 4
>I have to change to image to Hitesh sir's image.

```javascript
// Solution Task 4
const imageField = document.querySelector(".hero-right-section img");
imageField.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
```


### Task 5
>I have to add another named "Support Me" beside the "Chat With Me" button.

```javascript
// Solution Task 5

const container = document.querySelector(".hero-right-section-btns");
const button = document.createElement("button");
button.innerText = "Support Me";
container.appendChild(button);
```