// Applies effects to raceInfo columns when hovered
// The red or black overlays disappear and a text shadow appears when the targeted class is hovered

$(".anthem").hover(function () {
    $(this).toggleClass("hovered");
    $(".anthemText").toggleClass("hovered");
});

$(".rodes").hover(function () {
    $(this).toggleClass("hovered");
    $(".rodesText").toggleClass("hovered");
});

$(".papaJohns").hover(function () {
    $(this).toggleClass("hovered");
    $(".pjText").toggleClass("hovered");
});


// Applies effects to register column of pricing section
// The background becomes more transparent and the text gets bigger when the targeted class is hovered

$(".registerA").hover(function () {
    $(this).toggleClass("hovered");
    $(".regText").toggleClass("hovered");
});

// Applies effects to columns in the other information section
// The red and black overlays disappear from the images, and a drop shadow appears on the when the sections are hovered over

$(".about").hover(function () {
    $(this).toggleClass("hovered");
    $(".aboutText").toggleClass("hovered");
});

$(".traffic").hover(function () {
    $(this).toggleClass("hovered");
    $(".trafficText").toggleClass("hovered");
});

$(".spectator").hover(function () {
    $(this).toggleClass("hovered");
    $(".spectatorText").toggleClass("hovered");
});

$(".sponsors").hover(function () {
    $(this).toggleClass("hovered");
    $(".sponsorsText").toggleClass("hovered");
});



// // Applies effects to raceInfo columns on mouseover and mouseout
// // On mouseover, the red or black overlays disappear and a drop shadow on the text appears
// // On mouseout, the overlays reappear and the drop shadown on the text disappears
//
// $(".anthem").mouseover(function(){
//     $(".anthem").css("background-color", "rgba(0,0,0,0)");
//     $('.anthemText').css("text-shadow" , "2px 2px #000000");
// });
//
// $(".anthem").mouseout(function(){
//     $(".anthem").css("background-color", "rgba(0,0,0,0.5)");
//     $('.anthemText').css("text-shadow" , "0 0 0");
// });
//
//
// $(".rodes").mouseover(function(){
//     $(".rodes").css("background-color", "rgba(0,0,0,0)");
//     $('.rodesText').css("text-shadow" , "2px 2px #000000");
// });
//
// $(".rodes").mouseout(function(){
//     $(".rodes").css("background-color", "rgba(255,0,0,0.5)");
//     $('.rodesText').css("text-shadow" , "0 0 0");
// });
//
// $(".papaJohns").mouseover(function(){
//     $(".papaJohns").css("background-color", "rgba(0,0,0,0)");
//     $('.pjText').css("text-shadow" , "2px 2px #000000");
// });
//
// $(".papaJohns").mouseout(function(){
//     $(".papaJohns").css("background-color", "rgba(0,0,0,0.5)");
//     $('.pjText').css("text-shadow" , "0 0 0");
// });
//
// // Applies effects to register column of pricing section
// // On mouseover, the background of the a element becomes more transparent and the text gets bigger
// // On mouseout, the background and text returns to its original state
//
// $(".registerA").mouseover(function(){
//     $(".registerA").css("background-color", "rgba(255,0,0,0.2)");
//     $('.regText').css("font-size" , "2em");
//
// });
//
// $(".registerA").mouseout(function(){
//     $(".registerA").css("background-color", "rgba(255,0,0,0.5)");
//     $('.regText').css("font-size" , "1.5em");
// });
//
// // Applies effects to otherInfo columns on mouseover and mouseout
// // On mouseover, the red or black overlays disappear and a drop shadow on the text appears
// // On mouseout, the overlays reappear and the drop shadown on the text disappears
//
// $(".about").mouseover(function(){
//     $(".about").css("background-color", "rgba(0,0,0,0)");
//     $('.aboutText').css("text-shadow" , "2px 2px #000000");
// });
//
// $(".about").mouseout(function(){
//     $(".about").css("background-color", "rgba(0,0,0,0.5)");
//     $('.aboutText').css("text-shadow" , "0 0 0");
// });
//
// $(".traffic").mouseover(function(){
//     $(".traffic").css("background-color", "rgba(0,0,0,0)");
//     $('.trafficText').css("text-shadow" , "2px 2px #000000");
// });
//
// $(".traffic").mouseout(function(){
//     $(".traffic").css("background-color", "rgba(255,0,0,0.5)");
//     $('.trafficText').css("text-shadow" , "0 0 0");
// });
//
// $(".spectator").mouseover(function(){
//     $(".spectator").css("background-color", "rgba(0,0,0,0)");
//     $('.spectatorText').css("text-shadow" , "2px 2px #000000");
// });
//
// $(".spectator").mouseout(function(){
//     $(".spectator").css("background-color", "rgba(0,0,0,0.5)");
//     $('.spectatorText').css("text-shadow" , "0 0 0");
// });
//
// $(".sponsors").mouseover(function(){
//     $(".sponsors").css("background-color", "rgba(0,0,0,0)");
//     $('.sponsorText').css("text-shadow" , "2px 2px #000000");
// });
//
// $(".sponsors").mouseout(function(){
//     $(".sponsors").css("background-color", "rgba(255,0,0,0.5)");
//     $('.sponsorText').css("text-shadow" , "0 0 0");
// });
