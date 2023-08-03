import { faker } from '@faker-js/faker'
import { Movie } from 'interfaces'
import { render, screen } from '@testing-library/react'
import { VerticalCarousel } from '../VerticalCarousel'

const item1: Movie = {
  id: faker.string.uuid(),
  title: faker.lorem.words(),
}
const item2: Movie = {
  id: faker.string.uuid(),
  title: faker.lorem.words(),
}

describe('VerticalCarousel', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render all items', () => {
    const handlePressMovieMock = jest.fn()

    render(<VerticalCarousel data={[item1, item2]} handlePressMovie={handlePressMovieMock} />)

    expect(screen.getAllByTestId('card').length).toEqual(2)
  })
})
