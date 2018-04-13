var movie = Require;
    var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=3a745240";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });