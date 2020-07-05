var quotes= [
"The most difficult thing is the decision to act, the rest is merely tenacity. ..",
"If you cannot do great things, do small things in a great way. ...",
"Happiness can exist only in acceptance. ...",	
"Whoever is happy will make others happy too.",
"If opportunity doesnt knock, build a door",
]

function getQuote(){
	var randomNumber =Math.floor(Math.random() * quotes.length);
	document.getElementById('newQuoteSection').innerHTML=quotes[randomNumber];
}