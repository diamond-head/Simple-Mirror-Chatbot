import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import InputFooter from './index';
import SendSvg from '../../assets/images/send.svg'

describe("<InputFooter /> component", () => {
  it("InputFooter snapshot renders", () => {
    const component = renderer.create(
      <InputFooter 
        onSendButtonClick={() => {}} 
        onValueChange={() => {}} 
        defaultMessageValue={""} 
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render an input-footer image", () => {
    const wrapper = shallow(<InputFooter />);
    expect(wrapper.find('img').prop('src')).toEqual(SendSvg)
  });
});
