// function select the div tags d1 and d2 by id, and then change their css by referring the className to a different tag in css
function changeColor()
{
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  dd1.className = "greenback";
  dd2.className = "redback";
}

// function select the div tags d1 and d2 by id, and then change the content in the div tags by using the innerHTML 
function changeText()
{
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  dd1.innerHTML = "You never say";
  dd2.innerHTML = "a Good bye to real friend";
}