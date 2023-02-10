"use strict";

const initSlideAnimationEntreeTexte = function(){

    UpdateSrcImage('#quatre-zones');
    const droit = document.querySelector('#quatre-zones .img_droit');
    const haut = document.querySelector('#quatre-zones .img_haut');
    const bas = document.querySelector('#quatre-zones .img_bas');
    const gauche = document.querySelector('#quatre-zones .img_gauche');
    const zones = document.querySelector('#quatre-zones');
    

    // (Re)set initial position of img
  droit.setAttribute('style', 'transform :translateX(300%);');
  gauche.setAttribute('style', 'transform :translateX(-300%);');
  haut.setAttribute('style', 'transform :translateY(-400%);');
  bas.setAttribute('style', 'transform :translateY(500%);');
  
//Animations entrée des zones 

  anime({
    targets : "#quatre-zones .img_haut",
    translateY: 0,
    delay : 200,
    duration :1200,
    easing : "linear"
  });
  anime({
    targets : "#quatre-zones .img_gauche",
    translateX: 0,
    delay : 700,
    duration :1200,
    easing : "linear"
  });
  anime({
    targets : "#quatre-zones .img_droit",
    translateX: 0,
    delay : 1200,
    duration :1200,
    easing : "linear"
  });

  anime({
    targets: "#quatre-zones .img_bas",
    translateY : 0,
    delay : 1300,
    duration :1200,
    easing : "linear"
  })

  //Animation de la main de scroll
  anime({
    targets :'#scrollEntreeTexte',
    translateY: 10,
    direction: 'alternate',
    easing: 'easeInOutSine',
    loop : true
  })

setTimeout(()=> {
  swiper.enable()
},5000)
  
};

function UpdateSrcImage(id){

  if(id === '#animationSlideBas' ){selectedZone[1]='parking';};
  if(id === '#animationSlideDroit'){selectedZone[3] = 'friche';};
  if(id === '#animationSlideHaut'){selectedZone[2] = 'place';};

  document.querySelector(id + ' .img_bas').src = './img/'+selectedZone[1]+'.png';
  document.querySelector(id + ' .img_gauche').src =  './img/'+selectedZone[0]+'.png';
  document.querySelector(id + ' .img_haut').src =  './img/'+selectedZone[2]+'.png';
  document.querySelector(id + ' .img_droit').src =  './img/'+selectedZone[3]+'.png';
}