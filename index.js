function largestConsecRepeatChar(inputStr) {
	let lrgConsRepChar = "";
	if (inputStr && typeof inputStr === 'string' && inputStr.trim()) {
		function reducerCallback(accumulator, currentValue) {
			if (accumulator.lastChar === currentValue) {
				accumulator.count += 1;
			} else {
				accumulator.count = 1;
			}
			accumulator.lastChar = currentValue;
			if (accumulator.count > accumulator.result.countTracker) {
				accumulator.result = { repeatingChar: currentValue, countTracker: accumulator.count };
			} else {
				accumulator.result = accumulator.result;
			}
			return accumulator;
		}
		const initialValue = {
			result: { repeatingChar: "", countTracker: 0 }
		};
		const { result } = inputStr.trim().split('').reduce(reducerCallback, initialValue);
		lrgConsRepChar = result.countTracker > 1 ? result.repeatingChar.repeat(result.countTracker) : "";
		return lrgConsRepChar;
	}
	return lrgConsRepChar;
}

console.log(largestConsecRepeatChar(" b "));