$(document).ready(function() {
  $("#quiz-form").submit(function(e){
    e.preventDefault();
    const answer1 = parseInt($("#question1").val());
    const answer2 = parseInt($("#question2").val());
    const answer3 = parseInt($("#question3").val());
    const answer4 = parseInt($("#question3").val());
    const answer5 = parseInt($("#question3").val());
    const total = answer1 + answer2 + answer3 + answer4 + answer5;

    let result;
    let image;
    if(total <= 5) {
      result = "C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines."
      image = "<img src='images/csharp.jpg'>"
      $("h2").hide();
      $("body").removeClass();
      $("script").hide();
      $('.cSharp-background').show();
    } else if(total <= 10) {
      result = "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries."
      image = "<img src='images/java.jpg'>"
      $("h2").hide();
      $("script").hide();
      $("body").removeClass();
      $('.java-background').show();
    } else if(total <= 15) {
      result = "Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types."
      image = "<img src='images/ruby.jpg'>"
      $("h2").hide();
      $("script").hide();
      $("body").removeClass();
      $('.ruby-background').show();
    }
    $("#output").text("");
    $("#output").append("<p>" + result + "</p>");
    $("#output").append(image);
    $("button#submit").click(function() {
    });
  });
});