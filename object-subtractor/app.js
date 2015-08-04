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
	var difference = [],
		minuendLength = minuend.length,
		subtrahendLength = subtrahend.length,
		minuendIndex = 0,
		subtrahendIndex = 0,
		minuendElement = {};

	initialLoop: for (minuendIndex; minuendIndex < minuendLength; minuendIndex++) {
		minuendElement = minuend[minuendIndex];

		for (subtrahendIndex; subtrahendIndex < subtrahendLength; subtrahendIndex++) {
			if (comparator(minuendElement, subtrahend[subtrahendIndex])) {
				continue initialLoop;
			}
		}
		difference.push(minuendElement);
	}

	return difference;
};

var people = object_subtractor(mens, womens, function(men, women) {
	return men.id === women.id;
});

console.log(people)
