import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import MessageList from './index';

describe("<MessageList /> component", () => {
  it("MessageList snapshot renders", () => {
    const component = renderer.create(
      <MessageList messages={[]} source="ME" target="BOT" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
