"use strict";

const input = document.querySelector('#input');
const div = document.querySelector('#text');

input.addEventListener('focus',()=>{
  div.hidden = false;
})

input.addEventListener('blur',()=>{
  div.hidden = true;
})