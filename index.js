$(document).ready(function () {

    // welcome Note
$('#ul').append(`
<li id="robot">Hi! There Welcome to DOCBOT<small> (Powered by SIDS)</small>.</li>
`)
$('#ul').append(`
<li id="robot">Please Enter Your Name</li>
`)

// --------------------------
$('#submit').click(function(){



let inputValue;
inputValue = $('#inputField').val();
$('#ul').append(`
<li id="user">${inputValue}</li>
`)
$('#ul').append(`
<li id="robot">Hi! &#9995;&#127995; ${inputValue}</li>
`)
$('#ul').append(`
<li id="robot">Select Your Service Below </li>
`)

$('#inputField').val('')


$('#ul').append(`
<li id="btns">

<button class="selectorBtn"><i class="fa fa-stethoscope" aria-hidden="true"></i> Nearby Dispencery</button> 
<button class="selectorBtn"><i class="fa fa-map-marker" aria-hidden="true"></i> Nearby Pharmacy</button>
<button class="selectorBtn"><i class="fa fa-map-marker" aria-hidden="true"></i> Nearby Lab</button>
<button class="selectorBtn"><i class="fa fa-book" aria-hidden="true"></i> Doc Channeling</button>
<a href="https://www.drugs.com/" target="_blank"><button class="selectorBtn"><i class="fa fa-heartbeat" aria-hidden="true"></i> Drugs.com</button></a>      
</li>
`)
});










});
let height;


function bmi(){
    $('#ul').append(`
    <li id="robot">Enter Your Height <small> (Feet)</small>
    </li>
    `)

};


$('#submit').click(function(){
    alert('working')
    height = $('#inputField2').val();
    console.log("val",height)
});





// typing----------------


// $('#ul').append(`
// <li id="process">
// <div class="snippet" data-title=".dot-pulse" style="margin-top: 5px;">
// <div class="stage">
// <div class="dot-pulse"></div>
// </div>
// </div>
// </li>
// `);


// typing----------------