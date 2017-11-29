import except from 'except';
import invariant from 'invariant';

export default function reactTwiZlr({
    force = [],
    omit = ['children'],
    omitKnownPropTypes = true
} = {}) {
	return function decorator(component) {
		invariant(
			!component.prototype.passthrough,
			'@passthrough must be applied to a class with no `passthrough` property'
		);

		if (omitKnownPropTypes) {
			omit.push.apply(omit, Object.keys(component.propTypes || {}));
		}

		for (let prop of force) {
			const i = omit.indexOf(prop);
			if (i != -1) {
				omit.splice(i, 1);
			}
		}

		component.prototype.passthrough = function passthrough() {
			return except(this.props, omit);
		};
	};
}
