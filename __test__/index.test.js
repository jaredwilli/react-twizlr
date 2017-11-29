import expect from 'expect';
import * as Exports from '../src/index';

describe('react-twizlr exports', () => {
	it('exports all the symbols it should', () => {
		['Twizlr,'].forEach(
			prop => {
				expect(Exports.hasOwnProperty(prop)).toBe(true);
			}
		);
	});
});
