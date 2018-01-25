$(document).ready(function(){
  var buzzer = $("#buzzer")[0];
  var addTime = parseInt($("#num").html());
  console.log(addTime);
  var breakTime = parseInt($("#breakNum").html());
  console.log(breakTime);
  // buzzer.play();
  $("#reset").hide();

  $("#start").click(function(){

    var counter = setInterval(timer, 1000);
    addTime *=60;

    function timer(){
      $("#start, #add5clock, #minus5clock, #minus5break, #add5break, #breakNum, #title1, #title2").hide();
      $("#timeType").show();
      $("#timeType").html("Session Time:");
      addTime -=1;
          if(addTime === 0){
            buzzer.play();
            clearInterval(counter);
            var startBreak = setInterval(breakTimer, 1000);
            $("#num").hide();
          }
      if(){

      }else(){
        
      }

      $("#num").html(addTime);

        function breakTimer(){
          $("#timeType").html("Break Time:");
          $("#breakNum, #timeType").show();
          breakTime -=1;
          if(breakTime === 0){
            clearInterval(startBreak);
            buzzer.play();
            $("#reset").show();
            $("#breakNum, #timeType").hide();
          }
          $("#breakNum").html(breakTime);
        }
    }

  });

  $("#reset").click(function(){
    addTime = 25;
    breakTime = 25;
    $("#num").html(addTime);
    $("#breakNum").html(breakTime);
    $("#start, #add5clock, #minus5clock, #minus5break, #add5break, #breakNum, #num, #title1, #title2").show();
    $("#reset, #timeType").hide();
  });

  $("#minus5clock").click(function(){
      if(addTime>5){
        addTime -=5;
        // count = count - 5;
        $("#num").html(addTime);
        console.log(addTime);
      }
  });
  $("#add5clock").click(function(){
        addTime +=5;
        // count = count + 5;
        $("#num").html(addTime);
        console.log(addTime);
  });
  $("#minus5break").click(function(){
    if(breakTime>5){
      breakTime -=5;
      $("#breakNum").html(breakTime);
      console.log(breakTime);
    }
  });
  $("#add5break").click(function(){
    breakTime +=5;
    $("#breakNum").html(breakTime);
    console.log(breakTime);
  });
});
// new method/convention
// $("#buzzer").on("click",function(){
// })﻿
