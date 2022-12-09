$(function () {
  var anim_id;
  
  //DOM objects to variables
  var container = $('#container');
  var ball = $('#ball');
  var paddle = $('.paddle');
  var paddle1 = $('#paddle1');
  var paddle2 = $('#paddle2');
  var restart_btn = $('#restart_btn');
  
  //setup
  var container_width = parseInt(container.width());
  var container_height = parseInt(container.height());
  var paddle_width = parseInt(paddle.width());
  var ball_height = parseInt(ball.height());
  var ball_width = parseInt(ball.width());
  
  //declarations
  var game_over = false;
  
  var ball_center;
  var paddle_center;
  
  var ball_go = 'down';
  var ball_right_left = 'right';
  
  var top = 6;
  var right_left_angle = 0;
  
  var move_right_p1 = false;
  var move_left_p1 = false;
  
  var move_right_p2 = false;
  var move_left_p2 = false;
  
  var who_won;
  
  //game code starts
  
  $(document).on('keydown', function (e) {
    var key = e.keyCode;
    if (key === 37 && move_left_p1 === false) {
      move_left_p1 = requestAnimationFrame(left_p1);
    }
  });
  
  $(document).on('keyup', function (e) {
    var key = e.keyCode;
    if (key === 37) {
      cancelAnimationFrame(move_left_p1);
      move_left_p1 = false;
    }
  });
  
  function left_p1() {
    
    paddle1.css('left', parseInt(paddle1.css('left')) - 15);
    move_left_p1 = requestAnimationFrame(left_p1); 
 }
  
  
  
  //game code ends
  
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});