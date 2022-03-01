import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ChatHeader from './index';
import Icon from '../../assets/images/profile-icon.jpg'

describe("<ChatHeader /> component", () => {
  it("ChatHeader snapshot renders", () => {
    const component = renderer.create(
      <ChatHeader title="Amber" icon={Icon} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render an chat-header image", () => {
    const wrapper = shallow(<ChatHeader title="Amber" icon={Icon} />);
    expect(wrapper.find('img').prop('src')).toEqual(Icon)
  });

  it("renders an chat-header title", () => {
    const wrapper = shallow(<ChatHeader title="Amber" icon={Icon} />);
    expect(wrapper.find('.chat-header__title').text()).toBe("Amber");
  });
});
