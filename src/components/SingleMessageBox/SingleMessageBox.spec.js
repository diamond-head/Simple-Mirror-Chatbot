import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SingleMessageBox from './index';

describe("<SingleMessageBox /> component", () => {
  it("SingleMessageBox snapshot renders", () => {
    const component = renderer.create(
      <SingleMessageBox content={'Hi'} side="left" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render an single-message-box left side content", () => {
    const wrapper = shallow(<SingleMessageBox content={'Hi'} side="left" />);
    expect(wrapper.find('.single-msg-box__wrapper.left').text()).toBe("Hi");
  });

  it("render an single-message-box right side content", () => {
    const wrapper = shallow(<SingleMessageBox content={'Hi'} side="right" />);
    expect(wrapper.find('.single-msg-box__wrapper.right').text()).toBe("Hi");
  });
});
