import expect from 'expect';
import style from 'styzles.css';
import getClass from 'react-twizlr/src/utils/classNames';

describe('classNames lookups', () => {
	it('translates known styles', () => {
		expect(getClass('react-twizlr')).toEqual(style['react-twizlr']);
	});
	it('falls back to returning unknown classnames', () => {
		expect(getClass('no-sad-mouths')).toEqual('sad-mouths');
	});
});
