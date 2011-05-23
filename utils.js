var test = "TETTEETET";

exports.get = function() {
	return test;
}

exports.put = function(newVal) {
	test = newVal;
}