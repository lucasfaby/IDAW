const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

var time =3000;
var i=0;
var images = [];
images[0]="img/carousel1.jpg";
images[1]="img/carousel2.jpg";
images[2]="img/carousel3.jpg";
images[3]="img/carousel4.jpg";

function changeImg(){
    document.slide.src = images[i];
    if (i<images.length - 1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImg()",time);  
}

window.onload = changeImg;
