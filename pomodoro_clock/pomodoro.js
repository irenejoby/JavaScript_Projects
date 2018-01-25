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
    function timer(){
      count -=1;

    }
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
