import test from 'ava';
import fn from './';

test('Fail on invalid input', t => {
	t.throws(() => fn(2));
});

test('works on keys distinct prefix', t => {
	t.deepEqual(fn({home: 'Earth', isGlobalWarming: true}), {h: 'Earth', i: true});
});

test('works on similar key prefix', t => {
	t.deepEqual(fn({home: 'Earth', house: 'Tree', isGlobalWarming: true}), {h: 'Earth', i: true, ho: 'Tree'});
});

test('optimize for empty obejct', t => {
	t.deepEqual(fn({}), {});
});
