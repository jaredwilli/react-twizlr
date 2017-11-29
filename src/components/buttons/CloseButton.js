import React from 'react';
import PropTypes from 'prop-types';

import './close-button.css';

const CloseButton = ({
	type = 'button',
	className = '',
	style = {},
	...props
}) => (
    <button
		type={ type }
        style={ style }
        aria-label="Close"
        className={`twizlr ${className} close`}
        onClick={ event => props.onClick(event) }>
        { (!props.icon && !props.text) &&
            <span aria-hidden="true">&times;</span>
        }
        { props.icon && <i className={`fa fa-${props.icon}`} /> }
        { props.text && <span aria-hidden="true">{ props.text }</span> }
    </button>
);

CloseButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired
};

export default CloseButton;
