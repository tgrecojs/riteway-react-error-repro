import React from 'react'
import render from 'riteway/render-component';
import { describe } from 'riteway';
import LandingPage from './component'
describe('renderComponent', async assert => {
  const $ = render(<LandingPage />);

  assert({
    given: 'some jsx',
    should: 'render markup',
    actual: $('.flex').html().trim(),
    expected: 'testing'
  });
});