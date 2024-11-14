const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");
       // for opening popup
btns.forEach( (btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});
       // for closing popup using "X" sign
close_modals.forEach( (btn) => {
    btn.addEventListener("click", () => {const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
    });
 });
         // after opening popup, if you click outside popup, it will close
window.onclick = (event) => {
    if(event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};



          //  contact form validation
function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";
    var text;

    if(name.length < 3){
        text = "Please Enter Valid Name (Minimum 3 Characters)";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length < 5){
        text = "Please Enter Correct Subject (Minimum 7 Characters)";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 11) {
        text = "Please Enter Valid Phone Number (11-digit)";
        error_message.innerHTML = text;
        return false;
    }
    if (email.length < 12) {
        text = "Please Enter email (12 Characters)";
        error_message.innerHTML = text;
        return false;
    }
    // message should have more than 140 chracters
    if(message.length <= 20) {
        text = "Please Enter more than 20 characters";
        error_message.innerHTML = text;
        return false;
    }
    // message should have less than 140 chracters
    if(message.length >= 500) {
        text = "Please Enter less than 500 characters";
        error_message.innerHTML = text;
        return false;
    }
    // after all form fields are filled correctly
    alert("Form submitted successfully! Thank you for Contacting us❤");
    return true;
}

// search functionality
function filter(){
    var filterValue, input, ProductList, ProductName,h4,i;
    input = document.getElementById("search");
    filterValue = input.value.toUpperCase();
    ProductList = document.getElementById("product-list");
    ProductName = ProductList.getElementsByClassName("col-4");
    for(i = 0 ; i < ProductName.length ; i++){
        h4 = ProductName[i].getElementsByTagName("h4")[0];
        // insearch string match with the element name
    if(h4.innerHTML.toUpperCase().indexOf(filterValue) > -1 ) {
        ProductName[i].style.display= "";
    }
     else{
         ProductName[i].style.display = "none";
     }
    }
}

        // sort product br price
function sortlist(){
    var ProductList, ProductName, i, switching, b, c, shouldSwitch;
    ProductList =  document.getElementById("product-list");
    ProductName = ProductList.getElementsByClassName("col-4");
    switching = true;    //Boolean true
    while (switching) {
        switching = false;
        //loop is running through each product
        for(i = 0 ; i < (ProductName.length - 1) ; i++){
            shouldSwitch = false;
            b = ProductName[i].getElementsByTagName("span")[0].innerHTML;
            c = ProductName[i+1].getElementsByTagName("span")[0].innerHTML;
            //condion to cheak price for each product item
            if(Number(b) > Number(c)){
                shouldSwitch = true;
                break;
            }
        }
        //each product element will switch with next product element based on product price sorting
        if(shouldSwitch){
            ProductName[i].parentNode.insertBefore(ProductName[i + 1],ProductName[i]);
            switching = true;
        }
    }
}