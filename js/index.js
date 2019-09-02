document.getElementById("pills-one").addEventListener("click", pillsOneClick);
document.getElementById("pills-two").addEventListener("click", pillsTwoClick);
document.getElementById("pills-three").addEventListener("click", pillsThreeClick);

function pillsOneClick() {
  document.getElementById("pills-one").style.backgroundColor = 'steelblue';
  document.getElementById("pills-one").style.color = 'white';
  document.getElementById("pills-two").style.backgroundColor = 'white';
  document.getElementById("pills-two").style.color = 'steelblue';
  document.getElementById("pills-three").style.backgroundColor = 'white';
  document.getElementById("pills-three").style.color = 'steelblue';

  document.getElementById("sectionOne").style.display = 'inline';
  document.getElementById("sectionTwo").style.display = 'none';
  document.getElementById("sectionThree").style.display = 'none';
}
function pillsTwoClick() {
  document.getElementById("pills-two").style.backgroundColor = 'steelblue';
  document.getElementById("pills-two").style.color = 'white';
  document.getElementById("pills-one").style.backgroundColor = 'white';
  document.getElementById("pills-one").style.color = 'steelblue';
  document.getElementById("pills-three").style.backgroundColor = 'white';
  document.getElementById("pills-three").style.color = 'steelblue';

  document.getElementById("sectionTwo").style.display = 'inline';
  document.getElementById("sectionOne").style.display = 'none';
  document.getElementById("sectionThree").style.display = 'none';
}
function pillsThreeClick() {
  document.getElementById("pills-three").style.backgroundColor = 'steelblue';
  document.getElementById("pills-three").style.color = 'white';
  document.getElementById("pills-two").style.backgroundColor = 'white';
  document.getElementById("pills-two").style.color = 'steelblue';
  document.getElementById("pills-one").style.backgroundColor = 'white';
  document.getElementById("pills-one").style.color = 'steelblue';

  document.getElementById("sectionThree").style.display = 'inline';
  document.getElementById("sectionOne").style.display = 'none';
  document.getElementById("sectionTwo").style.display = 'none';
}