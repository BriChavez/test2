$(document).ready(function() {
  $("#cSharp").hide();
  $("#java").hide();
  $("#ruby").hide();
  $("#quiz-form").submit(function(e){
    e.preventDefault();
    const answer1 = parseInt($("#question1").val());
    const answer2 = parseInt($("#question2").val());
    const answer3 = parseInt($("#question3").val());
    const answer4 = parseInt($("#question4").val());
    const answer5 = parseInt($("#question5").val());
    let result = answer1 + answer2 + answer3 + answer4 + answer5;
    
      if(result <=5) {
      $(".script").hide();
      $("#java").hide();
      $("#ruby").hide();
      $("#cSharp").show();
    } else if(result <= 10) {
      $(".script").hide();
      $("#ruby").hide();
      $("#csharp").hide();
      $("#java").show();
    } else {
      $(".script").hide();
      $("#java").hide();
      $("#cSharp").hide();
      $("#ruby").show();
    }
    $("button#submit").click(function() {
    });
  });
});