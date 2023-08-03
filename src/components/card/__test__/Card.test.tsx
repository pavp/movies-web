import { faker } from '@faker-js/faker'
import { Movie } from 'interfaces'
import { fireEvent, render, screen } from '@testing-library/react'
import { Card } from 'components'

describe('Card', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should call handlePressMovie', () => {
    const item: Movie = {
      id: faker.string.uuid(),
      title: faker.lorem.words(),
    }
    const handlePressMovieMock = jest.fn()

    render(<Card item={item} handlePressMovie={handlePressMovieMock} />)
    fireEvent.click(screen.getByRole('button'))

    expect(handlePressMovieMock).toBeCalledWith(item.id)
  })
})
