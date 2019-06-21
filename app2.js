  // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
    var search = "lebanon";
    var dateE = "19910112";
    var dateB = "19870112"
    var endDate= "&end_date="+dateE;
    var beginDate= "&begin_date="+dateB;
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ search + "&api-key=RCpT76e2C7WAQpkQF5WGA3togcxx2m8y";
    var queryURL2 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ search + beginDate+ endDate+"&api-key=RCpT76e2C7WAQpkQF5WGA3togcxx2m8y";

    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      

    });
// ---------------------------------------------------------

    console.log("This console.log will probably happen first because of asynchronicity.");
    var x = 2;
    var y = 10;
    var z = 13;
    console.log("We can also assign some variables and do some arithmetic while we wait too: 2 + 10 + 13 = ", x + y + z);

