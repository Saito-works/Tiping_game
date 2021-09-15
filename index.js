//ドキュメントからテキストタグを取得。
var p = document.getElementById('text');

//タイピングリストの作成
var textLists = [
  'Hello world',
  'this is my app',
  'java script',
  'html',
  'css',
  'how are you?',
];


var checktexts = [];

function createtext () {
  var rnd = Math.floor(Math.random() * textLists.length);

  p.textContent = '';
  
  //文字列をそれぞれ分割して格納。
  checktexts = textLists[rnd].split('').map(function(value) {
    var span = document.createElement('span');
    
    span.textContent = value;
    p.appendChild(span);
    
    return span;
  });
}

createtext();
console.log(checktexts);

document.addEventListener('keydown' , keyDown);

function keyDown(e){
  if(e.key === checktexts[0].textContent) {
    checktexts[0].className = 'add-blue';
    
    checktexts.shift();

    if(!checktexts.length) createtext();
  }
}

// timer();



// var count = 60;

// function timer (){
//  setInterval(() => {
//    count-- ;
  
//   var timer = document.getElementById("time")
//   timer.innerHTML = count;

//   console.log(count);

//   if(count === 0){
//     clearInterval
//   } 
  
//  }, 1000);
// }


