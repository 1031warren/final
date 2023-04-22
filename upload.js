const image_input = document.querySelector("#image_input");
var uploaded_image = ""; 

image_input,addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    upload_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
})
var i = 0; 
var images = []; 
var time = 3000;

images[0] = 'gallery 7 .jpg'; 
images[1] = 'gallery 4 .jpg';
images[2] = 'gallery 5 .jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
      i++;
    } else {
        i = 0; 
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;
