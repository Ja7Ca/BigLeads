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