AOS.init();


function handleOnScroll() {
  const header = document.getElementById("navbar-move");
  header.classList.toggle("sticky", scrollY > 15);
}




let btnOne = document.getElementById('button-plus-one');
let iconOne = document.getElementById('plus-minus-change-one');
let blockOne = document.getElementsByClassName('education-name')[0];
btnOne.addEventListener('click',()=>{
    blockOne.classList.toggle("education-name-after");
    iconOne.classList.toggle('fa-plus');
    iconOne.classList.toggle("fa-minus");
    blockOne.style.transition ="0.8s ease-in-out"
})
//-----------------------------------------------

let btnTwo = document.getElementById('button-plus-two');
let iconTwo = document.getElementById('plus-minus-change-two')
let blockTwo = document.getElementsByClassName('education-name')[1];
btnTwo.addEventListener('click',()=>{
    blockTwo.classList.toggle("education-name-after");
    iconTwo.classList.toggle('fa-plus');
    iconTwo.classList.toggle("fa-minus");
    blockTwo.style.transition ="0.8s ease-in-out"
})

//-----------------------------------------------

let btnThree = document.getElementById('button-plus-three');
let iconThree = document.getElementById('plus-minus-change-three')
let blockThree = document.getElementsByClassName('education-name')[2];
btnThree.addEventListener('click',()=>{
    blockThree.classList.toggle("education-name-after");
    iconThree.classList.toggle('fa-plus');
    iconThree.classList.toggle("fa-minus");
    blockThree.style.transition ="0.8s ease-in-out"
})



$(document).ready(function () {
  $(".navbar-nav li a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $("#form-name,#form-email,#form-message,#form-number").on(
    "focus",
    function () {
      $(this).css({
        border: "1px solid #28e98c",
      });
    }
  );

  $("#form-name,#form-email,#form-message,#form-number").on(
    "blur",
    function () {
      $(this).css({
        border: "none",
        "border-bottom": "1px solid #28e98c",
      });
    }
  );
});

var Typed = new Typed(".auto-type", {
  strings: ["Web Developer", "Coder", "Problem Solver", "Software Developer"],
  typeSpeed: 50,
  backSpeed: 60,
  loop: true,
});

var date = new Date();
document.getElementById("date-change").innerHTML = `${date.getFullYear()}`;



let handleOnSubmit = () => {
  event.preventDefault();
  let isValid = true;

  let name = document.getElementById("form-name").value;
  let email = document.getElementById("form-email").value;
  let phone = document.getElementById("form-number").value;
  let message = document.getElementById("form-message").value;

  let nameRegex = /^[a-zA-Z\s]+$/;
  if (name == "") {
    document.getElementById("form-name-span").innerHTML = "Enter the name";
    isValid = false;
  } else if (!nameRegex.test(name.trim())) {
    document.getElementById("form-name-span").innerHTML = "Invalid name";
    isValid = false;
  } else {
    document.getElementById("form-name-span").innerHTML = "";
  }

  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email == "") {
    document.getElementById("form-email-span").innerHTML = "Enter the email";
    isValid = false;
  } else if (!emailRegex.test(email.trim())) {
    document.getElementById("form-email-span").innerHTML =
      "Invalid email format";
    isValid = false;
  } else {
    document.getElementById("form-email-span").innerHTML = "";
  }

  let phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
  if (phone == "") {
    document.getElementById("form-number-span").innerHTML = "Enter the number";
    isValid = false;
  } else if (!phoneRegex.test(phone.trim())) {
    console.log("sasa");
    document.getElementById("form-number-span").innerHTML =
      "Invalid phone number";
    isValid = false;
  } else {
    document.getElementById("form-number-span").innerHTML = "";
  }

  if (message == "") {
    document.getElementById("form-message-span").innerHTML =
      "Enter the message";
    isValid = false;
  } else {
    document.getElementById("form-message-span").innerHTML = "";
  }

  if (isValid) {
    (function () {
      emailjs.init("ete0XEyIwBJnlCsx0");
    })();
    var params = {
      name: document.getElementById("form-name").value,
      email: document.getElementById("form-email").value,
      phone_number: document.getElementById("form-number").value,
      message: document.getElementById("form-message").value,
    };
    const serviceID = "service_q9kcuen";
    const templateID = "template_cdyopbn";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById('form-button-span').innerHTML = "Messaged sent Succuessfully"
       setTimeout(()=>{
        document.getElementById('form-button-span').innerHTML = ""
       },4000)
       let frm = document.getElementsByName('contact-form')[0];
       frm.reset();
      })
      .catch((error) => {
        document.getElementById('form-button-span').innerHTML = "Something's Wrong"
       setTimeout(()=>{
        document.getElementById('form-button-span').innerHTML = ""
       },4000)
       frm.reset();
      });
  }
};
