///////////// footer ///////////////////////
/////////////////////////////////////////////
import { footer } from "../components/footer.js";
let footer_new = document.getElementById("footer");
footer_new.innerHTML = footer();

if (!localStorage.getItem("loggedName")) {
    alert("Please login first in order to checkout!");
    window.location.assign("/signin.html");
} else {
  let data = JSON.parse(localStorage.getItem("order_value")) || 0;
  console.log(data);
  document.querySelector("#basket_val span").innerHTML = `Rs ${data}`;
  document.querySelector("#basket_total span").innerHTML = `Rs ${data}`;

  let form = document.getElementById("formData");
  let LSDatakey = "delivery";
  let LSdata = JSON.parse(localStorage.getItem(LSDatakey));

  if (LSdata === null) {
    LSdata = [];
  }

  // form.addEventListener("submit", function (el) {
  document.querySelector("#address").addEventListener("click", function (el) {
    el.preventDefault();
    let obj = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      contact: form.contact.value,
      houseNo: form.houseNo.value,
      apartmentName: form.apartmentName.value,
      streetName: form.streetName.value,
      landmark: form.landmark.value,
      city: form.city.value,
      pincode: form.pincode.value,
    };
    for (let key in obj) {
      if (obj[key] === "") {
        alert("Fill All Fields");
        return;
      }
    }
    LSdata.push(obj);
    localStorage.setItem(LSDatakey, JSON.stringify(LSdata));
    // displayEmptyAddress(obj)
    alert("Billing Address Added");
    displayAddress(obj);
  });

  let placebtn = document
    .getElementById("place")
    .addEventListener("click", function () {
      alert("Order Placed");
      window.location.assign("/index.html");
    });

  function displayAddress(obj) {
    alert(`
        
    firstName: ${obj.firstName} ${"\n"}
    lastName: ${obj.lastName} ${"\n"}
    contact: ${obj.contact} ${"\n"}
    houseNo: ${obj.houseNo} ${"\n"}
    apartmentName: ${obj.apartmentName} ${"\n"}
    streetName: ${obj.streetName} ${"\n"}
    landmark: ${obj.landmark} ${"\n"}
    city: ${obj.city} ${"\n"}
    pincode: ${obj.pincode} ${"\n"}
    `);
  }
}
