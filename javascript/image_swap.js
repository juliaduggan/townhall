$(document).ready(function() {
	$('#image_list a').click(function(evt) {
	  evt.preventDefault();
	  var imageURL = $(this).attr('data-image');
	  var caption = $(this).attr('data-caption');
	  $('#image').fadeOut(500, function() {
		$('#image').attr('src', imageURL).fadeIn(500);
	  });
	  $('#caption').text(caption);
	});
  });
  