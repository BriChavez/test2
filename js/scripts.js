$(document).ready(function() {
  $("#quiz-form").submit(function(e){
    e.preventDefault();
    const answer1 = parseInt($("#question1").val());
    const answer2 = parseInt($("#question2").val());
    const answer3 = parseInt($("#question3").val());
    const answer4 = parseInt($("#question3").val());
    const total = answer1 + answer2 + answer3 + answer4;

    console.log(total)
    let result;
    let image;
    if(total <= 4) {
      result = "C#"
      image = "<img src='images/c#.jpg'>"
    } else if(total <= 8) {
      result = "Java"
      image = "<img src='images/java.jpg'>"
    } else if(total <= 12) {
      result = "Ruby"
      image = "<img src='images/ruby.jpg'>"
    }
    $("#output").text("");
    $("#output").append("<p>" + result + "</p>");
    $("#output").append(image);
  });
});