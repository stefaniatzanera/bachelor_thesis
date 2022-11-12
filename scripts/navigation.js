function myFunction() {
  var x = document.getElementById("nav");
  var z = document.getElementById("iicon");

  if (x.style.display === "block") {
    x.style.display = '';
    z.className = "fa fa-bars";
  } else {
    x.style.display = "block";
    z.className = "fa fa-times";
  }
}