console.log("Hello World")

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

img1.addEventListener('click', runFunctionImage1); 
img2.addEventListener('click', function(){ 
  console.log('I am in img2');
})

img3.addEventListener('click', function(){
  console.log('I am in img3');
})

function runFunctionImage1() {
    console.log('I am in img1')
}

let PRODUCTS_ARRAY = [
  { HTMLid : 'bag', imgURL: '../images/bag.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'banana', imgURL: '../images/banana.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'bathroom', imgURL: '../images/bathroom.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'boots', imgURL: '../images/boots.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'breakfast', imgURL: '../images/breakfast.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'bubblegum', imgURL: '../images/bubblegum.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'chair', imgURL: '../images/chair.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'cthulhu', imgURL: '../images/cthulhu.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'dog-duck', imgURL: '../images/dog-duck.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'dragon', imgURL: '../images/dragon.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'pen', imgURL: '../images/pen.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'pet-sweep', imgURL: '../images/pet-sweep.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'scissors', imgURL: '../images/scissors.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'shark', imgURL: '../images/shark.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'sweep', imgURL: '../images/sweep.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'tauntaun', imgURL: '../images/tauntaun.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'unicorn', imgURL: '../images/unicorn.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'water-can', imgURL: '../images/water-can.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'wine-glass', imgURL: '../images/wine-glass.jpg', totalViews: 0,totalVotes: 0},]

function handleClick() {
}

function renderImages() {
}