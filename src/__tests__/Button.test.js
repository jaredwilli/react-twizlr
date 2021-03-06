import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import * as setupTests from '../setupTests';

import Button from '../components/buttons/Button';

describe('Button component', () => {
  let buttonClicks = 0;

  const buttonClicked = jest.fn(() => {
    buttonClicks += 1;
    return 'buttonClick called!';
  });

  it('throws an error if onClick is excluded', () => {
    let stub = sinon.stub(console, 'error');
    shallow(<Button />);

    expect(stub.calledOnce).toEqual(true);

    console.error.restore();
  });

  it('should have initial props with bare minimum button definition with only onClick', () => {
    const wrapper = shallow(<Button onClick={() => buttonClicked()} />);

    // console.log(wrapper.debug());
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').props().type).toBe('button');
    expect(wrapper.find('button').props().className).toBe(
      'twizlr button primary'
    );

    expect(buttonClicked()).toEqual('buttonClick called!');
    expect(buttonClicks).toEqual(1);

    wrapper.find('button').simulate('click');
    expect(buttonClicks).toEqual(2);
  });

  it('should set the props correctly', () => {
    const wrapper = shallow(
      <Button className="delete" onClick={() => buttonClicked()}>
        <i className="fa fa-times" />
        Delete
      </Button>
    );

    // console.log(wrapper.debug());
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').props().type).toBe('button');

    expect(wrapper.find('i').props().className).toEqual('fa fa-times');
    expect(wrapper.find('button').text()).toBe('Delete');

    expect(wrapper.find('button').props().className).toBe(
      'twizlr button delete'
    );

    wrapper.find('button').simulate('click');
    expect(buttonClicks).toEqual(3);
  });
});
