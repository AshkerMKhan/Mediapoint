var home = document.getElementById('home');
home.onclick = function(){
    window.location='#homeDiv';
};
var about = document.getElementById('about');
var photos = document.getElementById('photos');
var videos = document.getElementById('videos');

var contactUs = document.getElementById('contactUs');
var contactDiv = document.getElementById('contactDiv');
contactUs.addEventListener("click",function() {
    window.scrollTo({
        top : contactDiv,
        left : 0,
        behavior : "smooth"
    });
} );

var followUs = document.getElementById('followUs');