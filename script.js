let pullDownButton = document.getElementById("lists");
let pullDownParents = document.getElementById("pull-down");
let pullDownChild = document.querySelectorAll(".pull-down-list");
let currentList = document.getElementById("current-list");

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

pullDownChild.forEach(function pullDown(list) {
  list.addEventListener("click", function () {
    console.log(list);
    const value = list.innerHTML;
    currentList.innerHTML = value;
    window.addEventListener("load", pullDown);

    switch (value) {
      case "リスト1":
        window.location.href = "https://www.google.com/";
        break;
      case "リスト2":
        window.location.href = "https://www.yahoo.co.jp/";
        break;
      case "リスト3":
        window.location.href = "https://www.bing.com/";
        break;
      case "リスト4":
        window.location.href = "https://www.naver.com/";
        break;
      default:
        break;
    }
  });
});
