"use strict"
// Определяет  с какого устройства сидит пользователь, на устройстве с тачскрином или нет
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   IOS: function () {
      return navigator.userAgent.match(/Android/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Android/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/Android/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.IOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};
if (isMobile.any()) {
   document.body.classList.add('_touch');

   const menuArrow = document.querySelector('.menu__arrow');
   const menuItem = document.querySelector('.menu__item');
   const subList = document.querySelector('.menu__sub-list');
   menuItem.addEventListener("click", function (e) {
      subList.classList.toggle('_active');
      menuItem.classList.toggle('_active');
      menuArrow.classList.toggle('_active');
   });

} else {
   document.body.classList.add('_pc');

   var el = document.getElementsByClassName('menu__item');
   for (var i = 0; i < el.length; i++) {
      el[i].addEventListener("mouseenter", showSub, false);
      el[i].addEventListener("mouseleave", hideSub, false);
   }
   function showSub(e) {
      if (this.children.length > 1) {
         this.children[1].style.overflow = "visible";
         this.children[1].style.opacity = "1";
         this.children[1].style.pointerEvents = "all";
      } else {
         return false;
      }
   }
   function hideSub(e) {
      if (this.children.length > 1) {
         this.children[1].style.overflow = "hidden";
         this.children[1].style.opacity = "0";
         this.children[1].style.pointerEvents = "none";
      } else {
         return false;
      }
   }
}
//=========================================================================================
const iconMenu = document.querySelector('.menu__burger');
if (iconMenu) {
   const menuBody = document.querySelector('.menu__body');
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}
//=========================================================================================
const popupLinks = document.querySelectorAll('.popup-link');
const popupOpen = document.querySelectorAll('.popup');
const popupClose = document.querySelectorAll('.popup__close');
const bodyLock = document.querySelector('body');

if (popupLinks.length > 0) {
   for (let i = 0; i < popupLinks.length; i++) {
      const popupLink = popupLinks[i];
      for (let w = 0; w < popupOpen.length; w++) {
         const windowPopup = popupOpen[w];
         popupLink.addEventListener('click', function (e) {
            const windOp = windowPopup.classList.add('open');
            windowPopup.classList.remove('none');
            bodyLock.classList.add('_lock');
            const closePopup = popupClose[0];
            closePopup.addEventListener('click', function (e) {
               windowPopup.classList.remove('open');
               windowPopup.classList.add('none');
               bodyLock.classList.remove('_lock');
            })
         });
      }
   }
}
//=========================================================================================
const nameValue = document.getElementById('input-name');
const phoneValue = document.getElementById('input-phone');
const btnValue = document.getElementById('input-btn');
let check = "false";
btnValue.addEventListener ('click', function (e) {
   console.log("Вы ввели: " + nameValue.value);
   console.log("Вы ввели: " + phoneValue.value);
   check = "true";
   if (check) {
      nameValue.value = "";
      phoneValue.value = "";
   }
})
//=========================================================================================
const nameValue2 = document.getElementById('input-name2');
const phoneValue2 = document.getElementById('input-phone2');
const btnValue2 = document.getElementById('input-btn2');
let check2 = "false";
btnValue2.addEventListener ('click', function (e) {
   console.log("Вы ввели: " + nameValue2.value);
   console.log("Вы ввели: " + phoneValue2.value);
   check2 = "true";
   if (check2) {
      nameValue2.value = "";
      phoneValue2.value = "";
   }
})