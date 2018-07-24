// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log(123);
//   e.preventDefault();
// });


document.querySelector('.clear-tasks').addEventListener('click', onclick);

function onclick(e){
  let val;
  val = e;
  
  // event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // event type
  val = e.type;

  // timestamp
  val = e.timeStamp;

  // coordinates relative to the window
  val = e.clientY;
  val = e.clientX;

  // coordinates relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}

