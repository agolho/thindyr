/**
 * jTinder initialization
 */
 var points=0,time=200,progressUpdate=setInterval(timer, 50);

function timer() {
  time-=5;
  $('#progressbar').html('<div class="progress-bar" role="progressbar" style="width: '+time/2+'%" aria-valuenow="'+time+'" aria-valuemin="0" aria-valuemax="200"></div>');
  if(time<=0) {
    $('#status').html('Game Over! </br> Total Points: '+points);
    $("#tinderslide").remove();
  }
}
$("#tinderslide").jTinder({
	// dislike callback
    onDislike: function (item) {
	    // set the status text
        if(item.index()+1 == 5 || item.index()+1 == 2) {
          points++;
          $('#status').html('+1 Points. Total: '+points);
        }
        else {
          points--;
          $('#status').html('-1 Points. Total: '+points);
        }
        time=200;
    },
	// like callback
    onLike: function (item) {
	    // set the status text
      if(item.index()+1 == 5 || item.index()+1 == 2) {
        points--;
        $('#status').html('-1 Points. Total: '+points);
      }
      else {
        points++;
        $('#status').html('+1 Points. Total: '+points);
      }
      time=200;
    },
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
	e.preventDefault();
	$("#tinderslide").jTinder($(this).attr('class'));
});
