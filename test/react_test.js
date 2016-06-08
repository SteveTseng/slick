'use strict';
// import { mocha } from 'mocha';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Slick from '../../src/main.jsx';

describe('Slick main app' , function() {
  it('calls componentDidMount', () => {
    const wrapper = mount(<Slick />);
    expect(Slick.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
