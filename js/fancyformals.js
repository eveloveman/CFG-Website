let button = document.querySelector('button')
let img = document.querySelector('img')
button.addEventListener('click', function changeimg (){
  console.log(img.src)
  if (img.src=="file:///Users/eveloveman/Documents/CAMBRIDGE/Code%20First/coding_course/CFG-Website/pinkdress.jpg"){
      img.src= "greysuit.jpg"
  } else {
    img.src="pinkdress.jpg"
  }

})
