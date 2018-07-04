var timer;
var timerSpeed = setInterval(timerGo, 1000);
var answersRight = 0;
var answersWrong = 0;
var questionOne = $("#choices1");
var answer1;
var answer2;
var answer3;
var answer4;
var answer5;
var answer6;
var answer7;
var answer8;

function start() {
    $("#pregame").removeClass("display");
    $("#start").addClass("display");
    $("#timer").html("Time Left: " + timer + "");
    answersRight = 0;
    answersWrong = 0;
    
}
    $("#start").on("click", function() {
        timer = 60;
        start();
});
function timerGo() {
    if (timer === 0) {
        clearTimeout(timerSpeed);
        results();
    } else {
        timer--;
        $("#timer").html("Time Left: " + timer + "");
    }
}
    function check1() {
            if(answer1 === $("#right").val()) {
                answersRight++;
            }   else {
                answersWrong++;
        }
    }
    $("#right").on("click", function() {
        answer1 =  $("#right").val();
    });
    $("#wrong1").on("click", function() {
        answer1 =  $("#wrong1").val();
    });
    $("#wrong2").on("click", function() {
        answer1 =  $("#wrong2").val();
    });
    $("#wrong3").on("click", function() {
        answer1 =  $("#wrong3").val();
    });
    
    function check2() {
        if(answer2 === $("#right2").val()) {
            answersRight++;
        }   else {
            answersWrong++;
    }
}
            $("#right2").on("click", function() {
                answer2 =  $("#right2").val();
            });
            $("#wrong21").on("click", function() {
                answer2 =  $("#wrong21").val();
            });
            $("#wrong22").on("click", function() {
                answer2 =  $("#wrong22").val();
            });
            $("#wrong23").on("click", function() {
                answer2 =  $("#wrong23").val();
                
            });
    function check3() {
        if(answer3 === $("#right3").val()) {
            answersRight++;
        }   else {
            answersWrong++;
    }
}
            $("#right3").on("click", function() {
                answer3 =  $("#right3").val();
                
            });
            $("#wrong31").on("click", function() {
                answer3 =  $("#wrong31").val();
                
            });
            $("#wrong32").on("click", function() {
                answer3 =  $("#wrong32").val();
                
            });
            $("#wrong33").on("click", function() {
                answer3 =  $("#wrong33").val();
                
            });
    function check4() {
        if(answer4 === $("#right4").val()) {
            answersRight++;
        }   else {
            answersWrong++;
    }
    }
            $("#right4").on("click", function() {
                answer4 =  $("#right4").val();
                
            });
            $("#wrong41").on("click", function() {
                answer4 =  $("#wrong41").val();
                
            });
            $("#wrong42").on("click", function() {
                answer4 =  $("#wrong42").val();
                
            });
            $("#wrong43").on("click", function() {
                answer4 =  $("#wrong43").val();
                
            });
    function check5() {
        if(answer5 === $("#right5").val()) {
            answersRight++;
        }   else {
            answersWrong++;
    }
    }
            $("#right5").on("click", function() {
                answer5 =  $("#right5").val();
                
            });
            $("#wrong51").on("click", function() {
                answer5 =  $("#wrong51").val();
                
            });
            $("#wrong52").on("click", function() {
                answer5 =  $("#wrong52").val();
                
            });
            $("#wrong53").on("click", function() {
                answer5 =  $("#wrong53").val();
                
            });
    function check6() {
        if(answer6 === $("#right6").val()) {
            answersRight++;
        }   else {
            answersWrong++;
    }
}
            $("#right6").on("click", function() {
                answer6 =  $("#right6").val();
                
            });
            $("#wrong61").on("click", function() {
                answer6 =  $("#wrong61").val();
                
            });
            $("#wrong62").on("click", function() {
                answer6 =  $("#wrong62").val();
                
            });
            $("#wrong63").on("click", function() {
                answer6 =  $("#wrong63").val();
                
            });
    function check7() {
        if(answer7 === $("#right7").val()) {
            answersRight++;
        }   else {
            answersWrong++;
    }
}
            $("#right7").on("click", function() {
                answer7 =  $("#right7").val();
                
            });
            $("#wrong71").on("click", function() {
                answer7 =  $("#wrong71").val();
                
            });
            $("#wrong72").on("click", function() {
                answer7 =  $("#wrong72").val();
                
            });
            $("#wrong73").on("click", function() {
                answer7 =  $("#wrong73").val();
                
            });
    function check8() {
        if(answer8 === $("#right8").val()) {
            answersRight++;
        }   else {
            answersWrong++;
    }
}
            $("#right8").on("click", function() {
                answer8 =  $("#right8").val();
            
            });
            $("#wrong81").on("click", function() {
                answer8 =  $("#wrong81").val();
                
            });
            $("#wrong82").on("click", function() {
                answer8 =  $("#wrong82").val();
                
            });
            $("#wrong83").on("click", function() {
                answer8 =  $("#wrong83").val();
                
            });
            function checks() {
                check1();
                check2();
                check3();
                check4();
                check5();
                check6();
                check7();
                check8();
            }
            function results() {
                clearTimeout(timerSpeed);
                checks();
                $("#question1").html("");
                $("#question2").html("");
                $("#question3").html("");
                $("#question4").html("");
                $("#question5").html("");
                $("#question6").html("");
                $("#question7").html("");
                $("#question8").html("");
                $("#choices1").html("");
                $("#choices2").html("");
                $("#choices3").html("");
                $("#choices4").html("");
                $("#choices5").html("");
                $("#choices6").html("");
                $("#choices7").html("");
                $("#choices8").html("");
                $("#choices9").html("");
                $("#finish").html("");
                $("#timer").html("Answers right: " + answersRight +
                "<br> Answers Wrong: " + answersWrong + "");
            }
        $("#finish").on("click", function() {
            checks();
            results();
            $("#timer").html("Answers right: " + answersRight +
                "<br> Answers Wrong: " + answersWrong + "");
        });