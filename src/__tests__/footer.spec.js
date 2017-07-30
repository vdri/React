import React from 'react'
import { mount } from 'enzyme'
import {Footer} from '../app/components/Footer'

function setup() {
  const props = {
    year: 2017,
    company: 'Sapient'
  }

  const enzymeWrapper = mount(<Footer {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Footer', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      //expect(enzymeWrapper.find('div').hasClass('header')).toBe(true)

      expect(enzymeWrapper.find('span').text()).toBe('Copyrights')

      expect(enzymeWrapper.find('p').text()).toContain('2017')

    //  const todoInputProps = enzymeWrapper.find('TodoTextInput').props()
      //expect(todoInputProps.newTodo).toBe(true)
      //expect(todoInputProps.placeholder).toEqual('What needs to be done?')
    })
 
  })
})