
const data=[];
$('.alert').alert('close');
 if ($(window).width() < 486){
//        alert("mobile");
     $('.w-50').addClass('w-100 text-justify');
     $('.display-3').addClass('display-4');
//     $('.alert').alert();
    }
    else {
//        alert("not mobile");
//        $('.alert').alert('close')
        $('.w-50').removeClass('w-100 text-justify');
     $('.display-3').removeClass('display-4');
    }

//form submit

$( "form" ).submit(function( event ) {
  event.preventDefault();
    const data=[];
    const temp=localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
    let arr={};
    let tempData=$( this ).serializeArray();
    for (let value of tempData){
            for (let key in value){
                arr={...arr,[value.name]:value.value};
                break;
            }
        }
 
temp.push(arr);
  console.log(temp) ;
 localStorage.setItem('data',JSON.stringify(temp));
     $('.alert').alert();
   
});
$('#handleQuery').click(function(){
  submit("The paragraph was clicked.");
});
// Sticky Header
$(window).scroll(function () {

    if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('bg-secondary text-secondary');
        $('.nav-link').removeClass('text-white');
        $('#logoImg').attr('src','./img/logo.png');
    } else{
        $('.navbar').removeClass('bg-secondary text-secondary');
        $(".nav-link").addClass('text-white');
        $('#logoImg').attr('src','./img/logoavii.png');
    }
     if ($(window).scrollTop() > 1000) {
        $('header').addClass('invisible');
    } else{
        $('header').removeClass('invisible');
    }
});


// navigation scroll 
$('nav a').click(function (event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
