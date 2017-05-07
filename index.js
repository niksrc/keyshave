'use strict';

const getTrimmedKey = (store, key, index = 1) => {
	const trimmedKey = key.slice(0, index);
	const isExists = Object.keys(store).includes(trimmedKey);
	return isExists ? getTrimmedKey(store, key, index + 1) : trimmedKey;
};

module.exports = obj => {
	if (typeof obj !== 'object') {
		throw new TypeError(`Expected a object, got ${typeof obj}`);
	}

	const keys = Object.keys(obj);
	const copy = {};
	if (keys.length < 1) {
		return copy;
	}

	for (let i = 0, length = keys.length; i < length; i++) {
		const trimmedKey = getTrimmedKey(copy, keys[i]);
		copy[trimmedKey] = obj[keys[i]];
	}

	return copy;
};

