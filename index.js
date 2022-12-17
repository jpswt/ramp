const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function checkRamp(number) {
	let count = 0;
	for (let i = 0; i < number; i++) {
		let ramp = true;
		let numArr = i.toString().split('');
		for (let j = 0; j < numArr.length; j++) {
			if (numArr[j] > numArr[j + 1]) {
				ramp = false;
			}
		}
		if (ramp) {
			console.log(numArr);
			count++;
		}
	}
	console.log(count);
}

function getPrompt() {
	rl.question('Enter your number: ', (answer) => {
		checkRamp(answer);
		getPrompt();
	});
}
getPrompt();
