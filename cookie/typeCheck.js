export default class TypeChecker {
	static isString(args) {
		return typeof args === 'string';
	}

	static isNumber(args) {
		return typeof args === 'number';
	}

	static isBoolean(args) {
		return typeof args === 'boolean';
	}
}
