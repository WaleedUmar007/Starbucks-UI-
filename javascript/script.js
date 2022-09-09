//function to select the image and show it on cicle 
function imageSlider(anything){
    document.querySelector('.starbucks').src = anything;
}


//function to change backgorund color of circle according to the color of image selected
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;

}

//function to toggle menu button

function menuToggle(){
    var menuToggle = document.querySelector('.toggle');
    var navigation =  document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}