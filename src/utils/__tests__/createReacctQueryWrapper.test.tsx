import { faker } from '@faker-js/faker'
import { render } from '@testing-library/react'

import { createReactQueryWrapper } from 'utils/createReactQueryWrapper'

describe('createReactQueryWrapper', () => {
  it('should renders children correctly ', () => {
    const childText = faker.lorem.word()
    const { getByText } = render(<div>{childText}</div>, { wrapper: createReactQueryWrapper })

    expect(getByText(childText)).toBeInTheDocument()
  })
})
