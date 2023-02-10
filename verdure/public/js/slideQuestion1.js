"use strict";

// async init function (because of the awaits on fetches)
const initSlideQuestion1 = async function(currentQuestion){

  if(currentQuestion != 1){swiper.enable(); swiper.slideTo()}

  const page = document.getElementById(currentQuestion)
  let question = document.querySelector('.question-footer'+currentQuestion)
  let city = document.querySelector('#city'+currentQuestion)



  setTimeout(()=> {
   question.style.opacity = 100;
   city.style.top = "23%";
},1000
 )

// questions
await questions();


};

function changementThermo(quantitytoAdd) {
  var div = document.querySelector('.thermo');
  var height = div.offsetHeight;
  var parentHeight = div.parentNode.offsetHeight;

  height = height / parentHeight * 100 ;

  var new_height = quantitytoAdd  + height;

  applyChange(".thermo",new_height);
}

function changementMoney(quantitytoAdd) {
  var div = document.querySelector('.money');
  var height = div.offsetHeight;
  var parentHeight = div.parentNode.offsetHeight;

  height = height / parentHeight * 100 ;

  var new_height = quantitytoAdd  + height;

  applyChange(".money",new_height);
}

function changementHappy(quantitytoAdd) {
  var div = document.querySelector('.happy');
  var height = div.offsetHeight;
  var parentHeight = div.parentNode.offsetHeight;

  height = height / parentHeight * 100 ;

  var new_height = quantitytoAdd  + height;

  applyChange(".happy",new_height);
}


function applyChange(div,new_height){

  if(new_height <= 10){
    $(div).css("height", 15+"%");
    if(div == ".thermo"){$(div).css("background-color", "#0ffc03");}
    else {$(div).css("background-color", "#fc0303");}
  }

  else if(new_height <= 20){
    $(div).css("height", new_height+"%");
    if(div == ".thermo"){$(div).css("background-color", "#3dfc03");}
    else {$(div).css("background-color", "#fc4503");}
  }

  else if(new_height <= 30){
    $(div).css("height", new_height+"%");
    if(div == ".thermo"){$(div).css("background-color", "#6bfc03");}
    else {$(div).css("background-color", "#fc6b03");}
  }

  else if(new_height <= 40){
    $(div).css("height", new_height+"%");
    if(div == ".thermo"){$(div).css("background-color", "#a9fc03");}
    else {$(div).css("background-color", "#fcc203");}
  }
  else if(new_height <= 50){
    $(div).css("height", new_height+"%");
    if(div == ".thermo"){$(div).css("background-color", "#d2fc03");}
    else {$(div).css("background-color", "#f8fc03");}
  }
  else if(new_height <= 60){
    $(div).css("height", new_height+"%");
    if(div == ".thermo"){$(div).css("background-color", "#f8fc03");}
    else { $(div).css("background-color", "#d2fc03");}
  }
  else if(new_height <= 70){
    $(div).css("height", new_height+"%");
    if(div == ".thermo"){$(div).css("background-color", "#fcc203");}
    else { $(div).css("background-color", "#a9fc03");}
  }
  else if(new_height <= 80){
    $(div).css("height", new_height+"%");
    if(div == ".thermo"){$(div).css("background-color", "#fc6b03");}
    else {$(div).css("background-color", "#6bfc03");}
  }
  else if(new_height < 90){
    $(div).css("height", new_height+"%");
    if(div == ".thermo"){$(div).css("background-color", "#fc4503");}
    else {$(div).css("background-color", "#3dfc03");}
  }
  else{
    $(div).css("height", 90+"%"); 
    if(div == ".thermo"){$(div).css("background-color", "#fc0303");}
    else { $(div).css("background-color", "#0ffc03");}
  }
}



