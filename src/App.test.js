import React from 'react';
import SocNetApp from './App';
import ReactDOM from "react-dom";
import {act} from "@testing-library/react";

test('renders without crashing', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(<SocNetApp />, div);
  });
  act(() => {
    ReactDOM.unmountComponentAtNode(div)
  });
});
