   

//    whatsApp Function
   
$(function () {
    $('#myButton').floatingWhatsApp({
        phone: '+923138275277',
        popupMessage: 'Ask any Question ?',
        message: "What are your Services?",
        showPopup: true,
        showOnIE: false,
        position: '',
        size: '48px',
        headerTitle: 'Welcome!',
        headerColor: '#25D366',
        backgroundColor: '#25D366',
        buttonImage: '<img src="images/whatsapp.png" />'
    });
});





//Get the button
let mybutton = document.getElementById("vanish");


$(document).ready(function () {
    // we ready for fire action with JQery.

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };
});


function scrollFunction() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

