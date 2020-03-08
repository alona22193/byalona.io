function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*Time*/
function updateClock() {
  var now = new Date();
  document.getElementById("javascTime").innerHTML = now;
  setInterval(updateClock, 1000);
}
/*updateClock();*/

/*Form*/
function validateForm() {
  var name = document.myForm.name.value;
  var email = document.myForm.email.value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  else if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
    alert("You have entered an invalid email address!");
    return (false);
  }
  else if (!document.myForm.devacut.checked && !document.myForm.trim.checked && !document.myForm.colorsingleprocess.checked && !document.myForm.colorgloss.checked && !document.myForm.colorpintura.checked && !document.myForm.styling.checked) {
    alert('You must select a service');
    return false;
  }
  else if (!document.myForm.morning.checked && !document.myForm.afternoon.checked && !document.myForm.midafternoon.checked) {
    alert('You must select a time');
    return false;
  }


}
