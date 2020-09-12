$(document).ready(function() {
  

  
    var magic8Ball = {};
  
    magic8Ball.listofAnswers = ["Definitely not", "I don't think so", "Only time can tell", "I'm not sure – ask again later", "That's a stupid question", "Absolutely!", "It seems likely", "that is forbidden knowledge…", "No clue", "Your aura makes it seem likely!", "Yesssssss"];
    
    $("#answer").hide();
    $("#displayQuestion").attr("style", "opacity: 0");
  
    magic8Ball.askQuestion = function(question) {
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png")
      $("#answer").fadeIn(4000);
      var randomValue = Math.random();
      var randomValueArray = randomValue * this.listofAnswers.length;
      var randomAnswerNumber = Math.floor(randomValueArray);
      var randomAnswer = this.listofAnswers[randomAnswerNumber];
    console.log(question);
    console.log(randomAnswer);
      $("#answer").text(randomAnswer);
    };
  
    
    
    var onClick = function() {
      
      $("#answer").hide();
      $("#displayQuestion").attr("style", "opacity: 0");
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
      setTimeout(
        function () {
          var question = prompt("Ask a Yes/No Question...");
          $("#displayQuestion").text(question);
          $("#displayQuestion").attr("style", "opacity: 100");
          $("#displayQuestion").hide();
          $("#displayQuestion").fadeIn(500);
          $("#8ball").effect("shake");
          magic8Ball.askQuestion(question);
        }, 750);
      
    };
    
    
    
    
    $("#questionButton").click(onClick);
    
  
  });
  