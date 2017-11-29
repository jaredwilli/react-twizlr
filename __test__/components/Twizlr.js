import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Twizlr, { getTwizleProps, style from 'react-twizlr/styzles';

const renderer = TestUtils.createRenderer();

describe('Twizlr', () => {
	it('Should add Twizlr class', () => {
		renderer.render(<Twizlr />);
		expect(renderer.getRenderOutput().props.className).toEqual(
			style.twizlr
		);
	});

	it('Computes the Twizlr properties', () => {
		expect(
			getTwizleProps({ className: 'test', reverse: true, unknown: 'bar' })
		).toEqual({
			unknown: 'bar',
			className: `test ${style.twizlr} ${style.reverse}`
		});
	});

	it('Should add "reverse" class if "reverse" property is true', () => {
		renderer.render(<Twizlr reverse />);
		expect(renderer.getRenderOutput().props.className).toContain(
			style.reverse
		);
	});

	it('Should not replace class', () => {
		renderer.render(<Twizlr className="foo" />);
		const { className } = renderer.getRenderOutput().props;
		expect(className).toContain('foo');
		expect(className).toContain(style.Twizlr);
	});

	it('Should add modificators', () => {
		renderer.render(
			<Twizlr
				pops="cherries"
			/>
		);
		const { className } = renderer.getRenderOutput().props;

		expect(className).toContain(style.Twizlr);
		expect(className).toContain(style['Twizlr']);
	});

	it('Should support custom tag name', () => {
		renderer.render(<Twizlr tagName="ul" />);
		expect(renderer.getRenderOutput().type).toBe('ul');
	});
});
