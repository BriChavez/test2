$(document).ready(function() {
  $("#cSharp").hide();
  $("#quiz-form").submit(function(e){
    e.preventDefault();
    const answer1 = parseInt($("#question1").val());
    const answer2 = parseInt($("#question2").val());
    const answer3 = parseInt($("#question3").val());
    const answer4 = parseInt($("#question4").val());
    const answer5 = parseInt($("#question5").val());
    let result = answer1 + answer2 + answer3 + answer4 + answer5;
    
    
    if(result <=9) {
      $(".script").hide();
      $("#cSharp").show();
      
    } else if(total <= 10) {
      result = "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries."
      image = "<img src='images/java.jpg'>"
      $("h2").hide();
      $(".script").hide();
      $("body").removeClass();
      $('.java-background').show();
    } else if(total >= 15) {
      result = "Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types."
      image = "<img src='images/ruby.jpg'>"
      $("h2").hide();
      $(".script").hide();
      $("body").removeClass();
      $('.ruby-background').show();
    }

    $("button#submit").click(function() {
    });
  });
});