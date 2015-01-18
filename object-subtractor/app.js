var mens = [{
		name: "John Smith",
		age: 23,
		id: "john_smith"
	},
	{
		name: "Ivan Grozni",
		age: 20,
		id: "ivan_grozni"
	},
	{
		name: "Charles Chaplin", 
		age: 10, 
		id: "charles_chaplin"
	},
	{
		name: "Elza Parini", 
		age: 70, 
		id: "elza_parini"
	}];

var womens = [
	{
		name: "Elza Parini", 
		age: 70, 
		id: "elza_parini"
	}];


function object_subtractor (minuend, subtrahend, comparator) {
	var difference = [];
	var minuendLength = minuend.length;
	var subtrahendLength = subtrahend.length;

	initialLoop: for (var minuendIndex = 0; minuendIndex < minuendLength; minuendIndex++) {
		var minuendElement = minuend[minuendIndex];

		for (var subtrahendIndex = 0; subtrahendIndex < subtrahendLength; subtrahendIndex++) {
			if ( comparator(minuendElement, subtrahend[subtrahendIndex]) ) {
				continue initialLoop;
			}
		}
		difference.push(minuendElement);
	}

	return difference;
};

var people = object_subtractor(dqdovci, babi, function(men, women) {
	return men.id === women.id;
});

console.log(people)
