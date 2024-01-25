
    $("h3").click(function(){
        $(this).next(".singer").slideToggle(1000);
    })


$("#exampleFormControlTextarea1").keyup( function () {
    // Get the remaining character count
    var remainingChars = 100 - $(this).val().length;

    // Update the character count in the span
    $("#charCount").text(remainingChars);

   
    if (remainingChars < 0) {
        
         $("#charCount").text("your available character finished");
    } else {
        $("#charCount").text(remainingChars);
    }
});
$(".icon-x").click(function(){
    let width = $(".menue").width();
    $(".nav").animate({left: -width}, 1000);
});
$(".menue-ic").click(function(){
    let width=$(".menue").width()
    let left=$(".nav").css("left")
    if(left=="0px"){
        // If the menu is open, hide it
      
     $(".nav").animate({left:-width},1000)
    
    }else{
          // If the menu is closed, show it
        $(".nav").animate({left:0},1000)
        
        

    }
})

$(".menue a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})

window.onload = function() {
   
    countDownToTime("10 october 2018 9:30:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }


