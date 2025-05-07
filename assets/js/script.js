// Accordion

$(".accordion:not(:nth-child(1))").find(".accordion-content").slideUp(500)
$(".accordion:not(:nth-child(1))").find(".line.abs").fadeIn(500)


$(".accordion:nth-child(1)").find(".accordion-content").slideDown(500)
$(".accordion:nth-child(1)").find(".line.abs").fadeOut(500)

$(".accordion").on('click', function(e) {
  $(this).find(".accordion-content").slideDown(500)
  $(this).find(".line.abs").fadeOut(500)
  $(".accordion").not($(this)).find(".accordion-content").slideUp(500)
  $(".accordion").not($(this)).find(".line.abs").fadeIn(500)
})

// Hamburger Navbaar

$("#hamburger").on('click', function(e) {
  $(this).toggleClass("active")
  if($(this).hasClass("active")) {
    $("#nav-menu").css({
      "display": "flex",
      top: "auto",
      bottom: "-390%",
    })
    $("body").addClass("overflow-hidden")
  } else {
    $("#nav-menu").css({
      "display": "none",
      top: "auto",
      bottom: "100%",
    })
    $("body").removeClass("overflow-hidden")
  }
})

$("#nav-menu ul li a").on('click', function(e) {
  if($("#hamburger").is(':visible')){
    $("#hamburger").click()
  }
})

// Aos

AOS.init({
  once: true,
});