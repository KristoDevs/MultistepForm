import { elements } from './base.js';

export const progressBarAdd = number => {
  let liElements = elements.progressbar.getElementsByTagName("li");
  let toArray = [...liElements];
  toArray[number].classList.add('active');
};

export const progressBarRemove = number => {
  let liElements = elements.progressbar.getElementsByTagName("li");
  let toArray = [...liElements];
  toArray[number].classList.remove('active');
};

export const changeTitle = number => {
  let liElements = elements.progressbar.getElementsByTagName("li");
  let toArray = [...liElements];
  let currentValue = toArray[number].innerHTML;
  elements.title.innerHTML = currentValue;
}