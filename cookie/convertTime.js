export default class ConvertTime {
	static convertMin(time) {
		return time * 60;
	}

	static convertHours(time) {
		return time * 3600;
	}

	static convertDays(time) {
		return time * 86400;
	}

	static convertMonths(time) {
		return time * 720;
	}

	static convertYears(time) {
		return time * 365;
	}
}
