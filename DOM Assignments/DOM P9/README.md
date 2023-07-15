# 9. DOM Assignment 9

### Task 1
> I have to change the "font-family" and the font "color" of the card heading.

```javascript
// Solution Assignment 9 Task 1

const title = document.querySelector(".caption .title");
title.style.fontFamily = "serif";
title.style.color = "#dc143c";
```


### Task 2
> I have to change the hover color of the "Add to Cart" button.

```javascript
// Solution Assignment 9 Task 2

const cartButton = document.querySelector(".add-to-cart");
cartButton.addEventListener("mouseover", () => {
  cartButton.style.backgroundColor = "#dc143c";
});
cartButton.addEventListener("mouseout", () => {
  cartButton.style.backgroundColor = "#3c8067";
});
```