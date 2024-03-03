
let pullDownButton = document.getElementById("lists");
let pullDownParents = document.getElementById("pull-down");

pullDownButton.addEventListener("mouseover", function () {
  this.style.backgroundColor = "blue";
  console.log("乗った時は青色");
});

pullDownButton.addEventListener("mouseout", function () {
  this.style.backgroundColor = "red";
  console.log("外れた時は赤色");
});

pullDownButton.addEventListener("click", function () {
  if (pullDownParents.style.display === "block") {
    pullDownParents.style.display = "none";
    console.log("非表示");
  } else {
    pullDownParents.style.display = "block";
    console.log("表示");
  }
  this.style.backgroundColor = "green";
  console.log("クリックは緑色");
});
