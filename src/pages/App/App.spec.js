/**
 * @jest-environment jsdom
*/

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import App from './App';

describe("App component", () => {
  it("app snapshot renders", () => {
    const component = renderer.create(
      <App />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders inner component", () => {
    const wrapper = mount(<App />);
    // expect(wrapper.find())
  });
});