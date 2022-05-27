$(document).ready(() => {
   $(".special-info").hide();
   $(".social-info").hide();

   $("#family-btn").on('click', () => {
       $(".family-info").show();
       $(".special-info").hide();
       $(".social-info").hide();
   })
   $("#special-btn").on('click', () => {
    $(".special-info").show();
    $(".family-info").hide();
    $(".social-info").hide();
})
$("#social-btn").on('click', () => {
    $(".social-info").show();
    $(".family-info").hide();
    $(".special-info").hide();
})

});