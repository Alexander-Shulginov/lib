/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import TypeCheck from './typeCheck';

export default class Cookie {
	setKeyValue(data) {
		return `${data.key}=${data.value}`;
	}

	setExpired(data) {
		return `max-age=${data.expiredDays}`;
	}

	setPath(data) {
		return `path=${data.path}`;
	}

	set(data) {
		console.log(data);
		document.cookie = `${this.setKeyValue(data)}; ${this.setExpired(data)}; ${this.setPath(data)};`;
	}
}

const cookie = new Cookie();

cookie.set({
	key: '123',
	value: 'asdf',
	expiredSec: 33,
	expiredMin: 12,
	expiredHours: 6,
	expiredDays: 3,
	expiredMonths: 2,
	expiredYears: 3,
	// path: '/admin',
	domain: '/google.google.com',
	secure: true,
	samesite: 'secure',
});

cookie.set({
	key: 'ssdfsd',
	value: 'sdfasdfdasf',
	path: 'sdfk',
});
