$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready

   //--INTRO DOODLE ANIMATIONS ALSO LINKED @ WHEEL

   TweenLite.to(".eye", .5, { opacity:1, delay:1.5});
   TweenLite.to(".uno", 2, { opacity:1, left:0, top:0, delay:1.5});
   TweenLite.to(".due", 2, { opacity:1, left:0, top:0, delay:1.5});
   TweenLite.to(".tre", 2, { opacity:1, left:0, top:0, delay:1.5});

$(window).on('wheel', function(event){
    // deltaY obviously records vertical scroll, deltaX and deltaZ exist too
if(event.originalEvent.deltaY < 0){
    // wheeled up
    // console.log("su");
    TweenLite.to(".eye", .2, { opacity:1,top:0, delay:0,});
    TweenLite.to(".uno", .5, { opacity:1, top:0, delay:.2,});
    TweenLite.to(".due", .5, { opacity:1, top:0, delay:.4,});
    TweenLite.to(".tre", .5, { opacity:1, top:0, delay:.5,});
}

else {
// wheeled down
// console.log("giù");
TweenLite.to(".eye", 2, { opacity:0, top:"50vh", delay:.2});
TweenLite.to(".uno", 2, { opacity:0, top:"50vh", delay:0});
TweenLite.to(".due", 2, { opacity:0, top:"50vh", delay:.2});
TweenLite.to(".tre", 2, { opacity:0, top:"50vh", delay:.4});
};
});// fine comando "wheel"

//--click on logo and "rewind"

$("nav .logo").click(function() {
    $("html , body").animate({scrollTop:0},1000);
    TweenLite.to(".eye", .5, { opacity:1,top:0, delay:0, ease:Power0.easeNone});
    TweenLite.to(".uno", 1, { opacity:1, top:0, delay:.2, ease:Power0.easeNone});
    TweenLite.to(".due", 1, { opacity:1, top:0, delay:.4, ease:Power0.easeNone});
    TweenLite.to(".tre", 1, { opacity:1, top:0, delay:.5, ease:Power0.easeNone});
});



//--click on call to action and scroll
$(".eye").click(function(e){
  e.preventDefault();
  var dist=$(this.hash).offset().top;
  $("html,body").animate({scrollTop:dist}, 1500)
});//chiudo click






//---------- ALL THE STUFFS TO DO ON SCROLL
$(document).scroll(function(){

  //--sticky nav
  var userPosition= $(document).scrollTop();
  var startmain= parseInt($("main").offset().top);
  if ((userPosition-startmain)>=0) {
    $("nav").css({"position":"fixed"});
  }
  else {
    $("nav").css("position","static");
  }

// --Link Highlighting
  $("nav a").each(function(){
    var startdiv= parseInt($(this.hash).offset().top);
    var itemHeight= parseInt($(this.hash).outerHeight());
    var enddiv= parseInt(startdiv+itemHeight);
    if ((userPosition>=startdiv) && (userPosition<enddiv)) {
      $(this).css("color" , "#ffff00");
    } else {
      $(this).css("color" , "#FFFFFF");
    }
  })//end of .each

  // --H2 entry
  var twoThirdsWindow= parseInt($(window).height() / 3)*2;
  var oneThirdWindow= parseInt($(window).height() / 3);
  var halfWindow= parseInt($(window).height() / 2);


if (userPosition>=(parseInt($("#portfolio").offset().top)-twoThirdsWindow)) {
  $("#portfolio .sec-title").fadeIn(300);
}

if (userPosition>=(parseInt($("#about").offset().top)-twoThirdsWindow)) {
  $("#about .sec-title").fadeIn(300);
}

if (userPosition>=(parseInt($("#contact").offset().top)-twoThirdsWindow)) {
  $("#contact .sec-title").fadeIn(300);
}

// // --GRID ITEMS entry

if (userPosition>=(parseInt($("#portfolio").offset().top)-halfWindow)) {
  $(".item").css("display","block");
}


//-- about entry

if (userPosition>=(parseInt($("#about").offset().top)-halfWindow)) {
  $(".portrait").fadeIn(300);
  $(".txt-wrapper").fadeIn(300);
}

//--set .skill elements, entry animation

if (userPosition>=(parseInt($(".bio").offset().top)-oneThirdWindow)) {
  $(".skills-container").fadeIn(300);
  $(".skill-coloured").each(function() {
    var percnt=$(this).attr("data-percnt");
    // $(this).css("width", (percnt+"%"));
    $(this).animate({width : (percnt+"%")},3000);
    $(this).siblings().html(percnt + "&percnt;");
  });//chiudo each
}

// // --contact form entry

if (userPosition>=(parseInt($("#contact").offset().top)-halfWindow)) {
  $(".form-container").fadeIn(300);
  $("#footer").fadeIn(300);
}


});// END OF ALL THE STUFFS TO DO ON SCROLL

//--click on linkS and scroll
$("nav a").click(function(event){
        event.preventDefault();
         var dist=$(this.hash).offset().top;
        $("html,body").animate({scrollTop:dist},1500);
    });//end of .click
//--menu burger-icon
$(".nav-container span").click(function(){
  $(".menu").slideToggle("slow", function() {
    $("nav a").click(function(){
      $(".menu").slideUp("slow")
    });//end of click
  });//end of slidetoggle
});//end of click


//--chiudi modale

$(".modal span").click(function(){
  $(".modal").css("display","none");
});//chiudo click

//--apro modale

$(".curtain").click(function(e){
  e.preventDefault();
  // $(this.hash).css("display","block");
  $(this.hash).fadeIn(300);
});//chiudo click

//-- metodo jquery post

$("#usersend").click(function(e){

var mastermail= "luciatarantino.82@gmail.com"

$.post("mail.php", {

  username:$("#username").val(),
  usermail:$("#usermail").val(),
  usertext:$("#usertext").val(),
  mastermail:mastermail

}, function(msg){

alert(msg);
// $("#risultato").html(msg);
e.preventDefault();

});//chiudo post

$("#username, #usermail, #usertext").val("")

});//chiudo click


});//chiudo ready
