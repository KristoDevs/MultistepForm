import * as utility from './js/utility.js'
//import * as base from './js/base.js'
import { elements } from './js/base.js'
import './sass/main.scss'
import './sass/reset.scss'

let counter = 0;

window.onload = function() {
  elements.previous.style.display = "none";
  elements.form_buttons.style.justifyContent = "flex-end";
  utility.progressBarAdd(0);
};

elements.next.addEventListener('click', () => {
  if(counter < 2) {
    counter++;
  } else {
    return false;
  }

  if(counter == 1) {
    elements.previous.style.display = "block";
    elements.next.style.display = "block";
    elements.form_account.style.display = "none";
    elements.form_profile.style.display = "block";
  } else {
    elements.previous.style.display = "block";
    elements.next.style.display = "none";
    elements.form_profile.style.display = "none";
    elements.form_details.style.display = "block";
  }

  if(counter > 0) {
    elements.form_buttons.style.justifyContent = "space-between";
  }
  
  utility.progressBarAdd(counter);
  utility.changeTitle(counter);
});

elements.previous.addEventListener('click', () => {
  if(counter > 0) {
    counter--;
  } else {
    return false;
  }

  if(counter == 1) {
    elements.previous.style.display = "block";
    elements.next.style.display = "block";
    elements.form_details.style.display = "none";
    elements.form_profile.style.display = "block";
  } else {
    elements.previous.style.display = "none";
    elements.next.style.display = "block";
    elements.form_profile.style.display = "none";
    elements.form_account.style.display = "block";
  }

  if(counter == 0) {
    elements.form_buttons.style.justifyContent = "flex-end";
  }
  
  utility.progressBarRemove(counter + 1);
  utility.changeTitle(counter);
});