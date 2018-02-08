import React from 'react'
import A from './index'
import renderer from 'react-test-renderer'

test('Initial render', () => {
  const component = renderer.create(
    <A link="javascript:void(0)" text="test" />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot();
})