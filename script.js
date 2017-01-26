 $.ajax({
     url: 'csv_data.csv',
     dataType: 'text',
 }).done(successFunction);

 var quotes;

 function successFunction(data) {

 	quotes = data.split('/n');

 }

 function newQuote() {

    var randomNum = Math.floor(Math.random() * quotes.length);
    document.getElementById('displayArea').innerHTML = quotes[randomNum];

 }