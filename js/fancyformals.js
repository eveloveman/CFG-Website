let button = document.querySelector('button')
let img = document.querySelector('img')
let pinkdress = img.src
button.addEventListener('click', function changeimg (){
  console.log(img.src)
  if (img.src==pinkdress){
      img.src= "greysuit.jpg"
  } else {
    img.src="pinkdress.jpg"
  }

})
