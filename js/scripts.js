$(document).ready(function() {
  $("#quiz-form").submit(function(e){
    e.preventDefault();
    const answer1 = parseInt($("#question1").val());
    const answer2 = parseInt($("#question2").val());
    const answer3 = parseInt($("#question3").val());
    const answer4 = parseInt($("#question4").val());
    const answer5 = parseInt($("#question5").val());

    const total = answer1 + answer2 + answer3 + answer4 + answer5;
    console.log(total)
    let result;
    let image;
    if(total <= 6) {
      result = "C#"
      image = "<img src='img/.jpg'>"
    } else if(total <= 14) {
      result = "Java"
      image = "<img src='img/.jpg'>"
    } else if(total <= 17) {
      result = "Ruby"
      image = "<img src='img/.jpg'>"
    }
    $("#output").text("");
    $("#output").append("<p>" + result + "</p>");
    $("#output").append(image);
  });
});