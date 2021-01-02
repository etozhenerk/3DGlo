"use strict";

import countTimer from './modules/countTimer';
import animateServiceBlock from './modules/animateServiceBlock';
import calc from './modules/calc';
import changeCommadPhoto from './modules/changeCommadPhoto';
import formValidation from './modules/formValidation';
import slider from './modules/slider';
import tabs from './modules/tabs';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import Validator from './modules/validator';

countTimer("3 january 2021 18:10");

//menu
toggleMenu();

//popup
togglePopUp();

animateServiceBlock();

tabs();

//слайдер
slider();

// по наведению мышкой меняются фотографии, а если увести мышку с элемента то возвращается прежняя фото
changeCommadPhoto();

//В калькуляторе ввод только цифр
formValidation();

//калькулятор
calc(100);

const validForm1 = new Validator({
  selector: "#form1",
  pattern: {
    name: /^[\sа-я]+$/i
  },
  method: {
    'form1-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form1-email': [
      ['notEmpty'],
      ['pattern', 'email']
    ],
    'form1-name': [
      ['notEmpty'],
      ['pattern', 'name']
    ]
  }
});

const validForm2 = new Validator({
  selector: "#form2",
  pattern: {
    name: /^[\sа-я]+$/i,
    message: /^[\W]+$/i
  },
  method: {
    'form2-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form2-email': [
      ['notEmpty'],
      ['pattern', 'email']
    ],
    'form2-name': [
      ['notEmpty'],
      ['pattern', 'name']
    ],
    'form2-message': [
      ['notEmpty'],
      ['pattern', 'message']
    ]
  }
});
const validForm3 = new Validator({
  selector: "#form3",
  pattern: {
    name: /^[\sа-я]+$/i
  },
  method: {
    'form3-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form3-email': [
      ['notEmpty'],
      ['pattern', 'email']
    ],
    'form3-name': [
      ['notEmpty'],
      ['pattern', 'name']
    ]
  }
});
validForm1.init();
validForm2.init();
validForm3.init();