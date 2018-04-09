// Start script

//Change for dropdown and seating
$(function chooseDay() {

$('#chooseDay').on('change', function () {
	console.log("Select has changed value",$(this).val());
	var changedValue = $(this).val();
	console.log("Select has changed value to %s", changedValue);
	//Hide all dayItems
	 $('.dayItem').hide();
	 $('#seatingLayout').hide();
	 $('#movieList').hide();
	//Build up an id and then use it to hide / show items	
	var dayId = '#' + changedValue; // eg # + mon
	$(dayId).show();
	var chosentext = $("#chooseDay :selected").text();
	console.log("Chosen text is now %s", chosentext);

  
});
})

   function ShowMovies(){
    //console.log("Inside show movies");
    var url = 'https://college-movies.herokuapp.com/';
      $.ajax({
        dataType: "json",
        url: url,
        success: function (result) { 
          //console.log("Inside ajax");
            var chooseDay = $('#chooseDay').val();
            var tmpResult = result.slice(1,10);
          //console.log(tmpResult);
          $('#ulMon').empty();
          for(var i = 0; i < tmpResult.length; i++) {
              $('#ulMon').append("<li>" + tmpResult[i]['title'] + "</li>");
              //console.log( tmpResult[i]['runningTimes']);
              var ulString = "<ul>";
              for(var j = 0; j < tmpResult[i]['runningTimes'][chooseDay].length; j++) {
              ulString += "<li>" + tmpResult[i]['runningTimes'][chooseDay][j] + "</li>";
              }
              ulString += "</ul>";
              
              $('#ulMon').append(ulString);

          }
        }
      });
   }
    
    // Click button book seating
    $(function () {
    $('#chooseBookOption').on('change', function () {    
      var chosentext = $("#chooseBookOption :selected").text();
      console.log("Chosen text is now %s", chosentext);
    });
    $('#bookSeating').on("click", function () {
    $('#seatingLayout').show();
    // Write a text for the button in console
    var buttonlayouttext = $("#chooselayouttext :selected").text();
    //console.log("Seating layout button is selected", buttonlayouttext);
    });
    })


    
    // Click button list movies
    $(function () {
      $('#chooseMovieOption').on('change', function () {    
        var chosentext = $("#chooseMovieOption :selected").text();
        console.log("Chosen text is now %s", chosentext);
      });

      $('#listMovies').on("click", function () {
        console.log($('#chooseDay').val());
        ShowMovies();
      $('#movieList').show();
      
      // Write a text for the button in console
      var buttonlayouttext = $("#chooselayouttext :selected").text();
      //console.log("Movie select button is selected", buttonlayouttext);
      });
      
  })
    
    
    // Seat is selected and de-selected
    $(function () {
    $(".seat").on("click", function() {
      if (! $(this).hasClass("reserved") ) {
          //$(this).addClass("selected");
          $(this).toggleClass("selected");
          var countSelected = $(".seat.selected").length;
          console.log("Count selected is %d",countSelected);
           $( ".seat.selected" ).each(function( index, element ) {
              console.log("You chose row %d and col %d", $(this).data("row"),$(this).data("col"));
      });
      }
    });
    })
    
    
    // Input movies from movie.jason
    $(function () {
      // var url = 'https://college-movies.herokuapp.com/';
      // $.ajax({
      //   dataType: "json",
      //   url: url,
      //   success: function (result) { 
      //       var chooseDay = $('#chooseDay').val();
      //       var tmpResult = result.slice(1,10);
      //     console.log(tmpResult);
      //     for(var i = 0; i < tmpResult.length; i++) {
      //         $('#ulMon').append("<li>" + tmpResult[i]['title'] + "</li>");
      //         console.log( tmpResult[i]['runningTimes']);
      //         var ulString = "<ul>";
      //         for(var j = 0; j < tmpResult[i]['runningTimes'][chooseDay].length; j++) {
      //         ulString += "<li>" + tmpResult[i]['runningTimes'][chooseDay][j] + "</li>";
      //         }
      //         ulString += "</ul>";
      //         $('#ulMon').append(ulString);

      //     }
      //   }
      // });
      ShowMovies();
    });
    
    

