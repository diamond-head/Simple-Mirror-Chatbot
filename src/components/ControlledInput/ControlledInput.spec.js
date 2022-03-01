import React from 'react';
import renderer from 'react-test-renderer';

import ControlledInput from "./index";

describe("<ControlledInput /> component", () => {
  it("ControlledInput snapshot renders", () => {
    const component = renderer.create(
      <ControlledInput name="test-input" placeholder="Please enter message..." defaultValue="" onValueChange={() => {}} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});