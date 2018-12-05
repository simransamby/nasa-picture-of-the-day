var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

    document.getElementById("demo1").innerHTML = myObj.title;
    document.getElementById("demo2").innerHTML = myObj.date;
    document.getElementById("demo3").innerHTML = myObj.explanation;
    document.getElementById("demo4").innerHTML = myObj.hdurl;
    document.getElementById("myImg").src = myObj.url;
  }
};
xmlhttp.open(
  "GET",
  "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo",
  true
);
xmlhttp.send();