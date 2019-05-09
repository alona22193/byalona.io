$(document).ready(function(){
var magic8Ball = {};

  
magic8Ball.listOfAnswers = ["Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
$("#answer").hide();

magic8Ball.askQuestion = function(question){
  
    var randomNumber = Math.random();
  
    var randomNumberForlistOfAnswers = randomNumber* this.listOfAnswers.length;
  
    var randomIndex = Math.floor(randomNumberForlistOfAnswers);
  
    var answer = this.listOfAnswers[randomIndex];
  
  $("#answer").text(answer); 
  
    console.log(question);
    console.log(answer);
};

var onClick = function() {
    var question = prompt("ASK A YES/NO QUESTION!");
    magic8Ball.askQuestion(question);
    $("#answer").hide();
        $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
  
    
    
    $("#answer").fadeIn("7000");
};


$("#questionButton").click(onClick);


});
  
  
  




$(document).ready(function(){
var magic8Ball = {};

  
magic8Ball.listOfAnswers = ["Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
$("#answer").hide();

magic8Ball.askQuestion = function(question){
  
    var randomNumber = Math.random();
  
    var randomNumberForlistOfAnswers = randomNumber* this.listOfAnswers.length;
  
    var randomIndex = Math.floor(randomNumberForlistOfAnswers);
  
    var answer = this.listOfAnswers[randomIndex];
  
  $("#answer").text(answer); 
  
    console.log(question);
    console.log(answer);
};

var onClick = function() {
    var question = prompt("ASK A YES/NO QUESTION!");
    magic8Ball.askQuestion(question);
    $("#answer").hide();
        $("#8ball").attr("src","img/8_ball_2.png");
  
    
    
    $("#answer").fadeIn("7000");
};


$("#questionButton").click(onClick);


});
  
  
  




