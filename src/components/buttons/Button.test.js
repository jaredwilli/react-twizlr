import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({
	type = 'button',
	className = 'primary',
    style = {},
    children = 'Submit',
	...props
}) => (
    <button
        type={ type }
        style={ style }
        aria-label="Button"
        className={`twizlr ${className} button`}
        onClick={ event => props.onClick(event) }>
        { children }
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.object
    ])
};

export default Button;
